import { threads } from 'worker_threads';

// ガウシアンフィルタの処理
function handleFilter(imageData, width, height) {
    const outputData = new Uint8ClampedArray(imageData.length);
    // 7x7 ガウシアンフィルタのカーネル
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
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let r = 0, g = 0, b = 0;

            // カーネルを適用
            for (let ky = -half; ky <= half; ky++) {
                for (let kx = -half; kx <= half; kx++) {
                    const iy = y + ky;
                    const ix = x + kx;

                    // 画像の範囲内か確認
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
    return outputData;
}

// メインスレッドから送られたデータを受け取って処理
const { imageData, width, height } = threads.workerData;
const outputData = handleFilter(imageData, width, height);

// フィルタ処理が終わったデータをメインスレッドに送信
threads.parentPort.postMessage(outputData);
