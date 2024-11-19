export function updateGrid(grid, ROWS, COLS) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する (実装してね)
      let aroundCells = 0;

      // 8つの隣接セルをチェック
      if (row > 0 && col > 0 && grid[row - 1][col - 1]) aroundCells++; // 左上
      if (row > 0 && grid[row - 1][col]) aroundCells++; // 上
      if (row > 0 && col < COLS - 1 && grid[row - 1][col + 1]) aroundCells++; // 右上
      if (col > 0 && grid[row][col - 1]) aroundCells++; // 左
      if (col < COLS - 1 && grid[row][col + 1]) aroundCells++; // 右
      if (row < ROWS - 1 && col > 0 && grid[row + 1][col - 1]) aroundCells++; // 左下
      if (row < ROWS - 1 && grid[row + 1][col]) aroundCells++; // 下
      if (row < ROWS - 1 && col < COLS - 1 && grid[row + 1][col + 1])
        aroundCells++; // 右下

      // ライフゲームのルールに従ってセルを更新
      if (grid[row][col]) {
        //trueの場合
        // 生きているセルに隣接する生きたセルが2つか3つならば、次の世代でも生存する。それ以外は死亡
        nextGrid[row][col] = aroundCells === 2 || aroundCells === 3;
      } else {
        //falseの場合
        // 死んでいるセルに隣接する生きたセルがちょうど3つあれば、次の世代が誕生する
        nextGrid[row][col] = aroundCells === 3;
      }
    }
  }
  return nextGrid;
}
