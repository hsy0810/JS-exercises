const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');
const worker = new Worker('./index.js');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

worker.onmessage = function(event) {
    const { imageData } = event.data;
    ctx.putImageData(imageData, 0, 0);
};

function drawFractal() {
    worker.postMessage({
        tile: { width, height },
        x0: -1,
        y0: -1,
        perPixel: 1,
        maxIterations: 100
    });
}

drawFractal();