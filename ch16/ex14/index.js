import { threads } from 'worker_threads';

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

    // ワーカーにフィルタ処理を依頼する
    //新しいワーカースレッドを作成
    // workerData には、画像データ（imageData）、画像の幅（width）、高さ（height）が渡され、これをもとに worker.js 内で画像処理が行われます
    const worker = new threads.Worker("ch16/ex14/worker.js", {
      workerData: {
        imageData: data,
        width: img.width,
        height: img.height
      }
    });
    //worker.on('message') は、ワーカースレッドが処理を終えた後にメッセージを送信した際のイベントリスナーです。outputData が受け取られます。
    worker.on('message', (outputData) => {
      const outputImageData = new ImageData(outputData, img.width, img.height);
      //filteredCtx.putImageData(outputImageData, 0, 0) で、処理後の画像を <canvas> 要素に描画しています
      filteredCtx.putImageData(outputImageData, 0, 0);
    });

  });
  //FileReader オブジェクトを使用して、ローカルファイル（画像ファイル）を Base64 形式のデータ URL として読み込む処理
  reader.readAsDataURL(file);
});
