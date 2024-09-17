onmessage = function(message) {
    const { tile, x0, y0, perPixel } = message.data;
    const { width, height } = tile;
    const imageData = new ImageData(width, height);
    const data = imageData.data;

    function isInSierpinski(x, y) {
        while (x > 0 || y > 0) {
            if ((x % 2) + (y % 2) === 1) return false;
            x = Math.floor(x / 2);
            y = Math.floor(y / 2);
        }
        return true;
    }

    for (let row = 0; row < height; row++) {
        for (let column = 0; column < width; column++) {
            const x = Math.floor(x0 + column * perPixel);
            const y = Math.floor(y0 + row * perPixel);

            const color = isInSierpinski(x, y) ? 0 : 255;

            const index = (row * width + column) * 4;
            data[index] = color;       // Red
            data[index + 1] = color;   // Green
            data[index + 2] = color;   // Blue
            data[index + 3] = 255;     // Alpha
        }
    }

    postMessage({ tile, imageData }, [imageData.data.buffer]);
};
