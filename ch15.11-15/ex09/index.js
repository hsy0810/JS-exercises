// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;
// 1セルのサイズ
const RESOLUTION = 10;

const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

canvas.width = ROWS * RESOLUTION;
canvas.height = COLS * RESOLUTION;

let animationId = null;
const sound = new Audio("./decision1.mp3");

let grid = new Array(ROWS)
  .fill(null)
  .map(() => new Array(COLS).fill(null).map(() => !!Math.floor(Math.random() * 2)));

// WebSocketの接続
const socket = new WebSocket("ws://localhost:3003");

socket.addEventListener("open", () => {
  console.log("Connected to WebSocket server");
});

socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);

  switch (data.type) {
    case "update":
      grid = data.grid;
      renderGrid(grid);
      break;
    case "pause":
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      break;
    case "start":
      if (!animationId) {
        update();
      }
      break;
  }
});

canvas.addEventListener("click", (evt) => {
  const rect = canvas.getBoundingClientRect();
  const pos = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };

  const row = Math.floor(pos.y / RESOLUTION);
  const col = Math.floor(pos.x / RESOLUTION);
  
  // セルの反転をサーバーに送信
  socket.send(JSON.stringify({
    type: "toggle",
    row: row,
    col: col
  }));
  
  grid[row][col] = !grid[row][col];
  sound.cloneNode().play();
  renderGrid(grid);
});

function renderGrid(grid) {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = grid[row][col];
      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
}

function updateGrid(grid) {
  const nextGrid = grid.map(arr => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      let aroundCells = 0;

      if (row > 0 && col > 0 && grid[row - 1][col - 1]) aroundCells++;
      if (row > 0 && grid[row - 1][col]) aroundCells++;
      if (row > 0 && col < COLS - 1 && grid[row - 1][col + 1]) aroundCells++;
      if (col > 0 && grid[row][col - 1]) aroundCells++;
      if (col < COLS - 1 && grid[row][col + 1]) aroundCells++;
      if (row < ROWS - 1 && col > 0 && grid[row + 1][col - 1]) aroundCells++;
      if (row < ROWS - 1 && grid[row + 1][col]) aroundCells++;
      if (row < ROWS - 1 && col < COLS - 1 && grid[row + 1][col + 1]) aroundCells++;

      if (grid[row][col]) {
        nextGrid[row][col] = aroundCells === 2 || aroundCells === 3;
      } else {
        nextGrid[row][col] = aroundCells === 3;
      }
    }
  }
  return nextGrid;
}

function update() {
  grid = updateGrid(grid);
  renderGrid(grid);
  animationId = requestAnimationFrame(update);
}

startButton.addEventListener("click", () => {
  // ゲームの開始・再開をサーバーに送信
  socket.send(JSON.stringify({ type: "start" }));
});

pauseButton.addEventListener("click", () => {
  // ゲームの一時停止をサーバーに送信
  socket.send(JSON.stringify({ type: "pause" }));
});
