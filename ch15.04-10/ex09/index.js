document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    // グレースケールへの変換 (RGB を足して平均を取っている)
    //
    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    // imageData の中身はそのままに別の配列に結果を格納するとよい
    const outputData = new Uint8ClampedArray(data.length);
    
    // TODO: ここで imageData.data を参照して outputData に結果を格納
    // ぼかしの原理、アルゴリズムについてあんまり理解できていなかったため、ChatGPTに頼った
        // 5x5 ガウシアンフィルタのカーネル
       const kernel = [
        0, 0, 1, 2, 1, 0, 0,
        0, 3, 13, 22, 13, 3, 0,
        1, 13, 59, 97, 59, 13, 1,
        2, 22, 97, 159, 97, 22, 2,
        1, 13, 59, 97, 59, 13, 1,
        0, 3, 13, 22, 13, 3, 0,
        0, 0, 1, 2, 1, 0, 0
    ];

    const kernelSum = 1003; 
    const kernelSize = 7;
    const half = Math.floor(kernelSize / 2);

    // 画像のぼかし処理
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        let r = 0, g = 0, b = 0;

        for (let ky = -half; ky <= half; ky++) {
          for (let kx = -half; kx <= half; kx++) {
            const iy = y + ky;
            const ix = x + kx;

            if (ix >= 0 && ix < img.width && iy >= 0 && iy < img.height) {
              const weight = kernel[(ky + half) * kernelSize + (kx + half)];
              const index = (iy * img.width + ix) * 4;

              r += data[index] * weight;
              g += data[index + 1] * weight;
              b += data[index + 2] * weight;
            }
          }
        }

        const outputIndex = (y * img.width + x) * 4;
        outputData[outputIndex] = r / kernelSum;
        outputData[outputIndex + 1] = g / kernelSum;
        outputData[outputIndex + 2] = b / kernelSum;
        outputData[outputIndex + 3] = data[outputIndex + 3];
      }
    }
    const outputImageData = new ImageData(outputData, img.width, img.height);
    filteredCtx.putImageData(outputImageData, 0, 0);
  });

  reader.readAsDataURL(file);
});
