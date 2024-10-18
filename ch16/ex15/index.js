import { threads } from 'worker_threads';

//threads.isMainThread を使用して、現在のスレッドがメインスレッドかどうかを判定
if (threads.isMainThread) {
    let num = 0; // number 型の変数 num を定義
    const worker = new threads.Worker(__filename);

    // メインスレッド
    //online" イベントは、ワーカースレッドが起動した際にメインスレッドで発火します。ワーカースレッドが準備完了したことを知らせるイベント
    worker.on("online", () => {
        for (let i = 0; i < 10_000_000; i++) {
            //インクリメント
            num++;
        }
        //ワーカースレッドからのメッセージを受け取った際に num の値をコンソールに出力
        worker.on("message", () => {
            if (message === "increment") {
                num++;
            } else {
                console.log(num);
            }

        });
    });
} else {
    for (let i = 0; i < 10_000_000; i++) {
        //"numをインクリメントせよ" のメッセージを送る
        threads.parentPort.postMessage("increment");
    }
    threads.parentPort.postMessage("done");
}