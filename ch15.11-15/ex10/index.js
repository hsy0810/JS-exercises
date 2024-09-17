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

    // カーネル
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

    //web workerを利用する
    const worker = new Worker('worker.js');

    worker.postMessage({ imageData: data, width: img.width, height: img.height, kernel, kernelSum, kernelSize });

    worker.onmessage = function(event) {
      const { outputData } = event.data;
      const outputImageData = new ImageData(outputData, img.width, img.height);
      filteredCtx.putImageData(outputImageData, 0, 0);
      worker.terminate(); 
    };
  });

  reader.readAsDataURL(file);
});
