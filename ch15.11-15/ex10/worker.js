self.onmessage = function(event) {
    const { imageData, width, height, kernel, kernelSum, kernelSize } = event.data;
    
    const half = Math.floor(kernelSize / 2);
    const outputData = new Uint8ClampedArray(imageData.length);
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let r = 0, g = 0, b = 0;
  
        for (let ky = -half; ky <= half; ky++) {
          for (let kx = -half; kx <= half; kx++) {
            const iy = y + ky;
            const ix = x + kx;
  
            if (ix >= 0 && ix < width && iy >= 0 && iy < height) {
              const weight = kernel[(ky + half) * kernelSize + (kx + half)];
              const index = (iy * width + ix) * 4;
  
              r += imageData[index] * weight;
              g += imageData[index + 1] * weight;
              b += imageData[index + 2] * weight;
            }
          }
        }
  
        const outputIndex = (y * width + x) * 4;
        outputData[outputIndex] = r / kernelSum;
        outputData[outputIndex + 1] = g / kernelSum;
        outputData[outputIndex + 2] = b / kernelSum;
        outputData[outputIndex + 3] = imageData[outputIndex + 3];
      }
    }
  
    self.postMessage({ outputData });
  };
  