import { threads } from 'worker_threads';

if(threads.isMainThread) {
    let num = 0; // number 型の変数 num を定義
    const worker = new threads.Worker(__filename); 

    // メインスレッド
    worker.on("online", () => {
        for(let i = 0; i < 10_000_000; i++) {
            num++;
        }

        worker.on("message", () => {
          console.log(num);
        });
    });
}else {
    for (let i = 0; i < 10_000_000; i++) {
       //"numをインクリメントせよ" のメッセージを送る
       threads.parentPort.postMessage("increment"); 
    }
    threads.parentPort.postMessage("done");
}