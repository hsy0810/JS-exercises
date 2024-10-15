import { spawn } from "child_process";
import path from "path";

// ESMでこのファイルの絶対パスとして__dirnameを定義するイディオム
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// startChildで起動したプロセスの参照
let child = null;

// node ./child.js を起動し、このプロセスが終了したときに解決するPromiseを返す
// cf. https://nodejs.org/api/child_process.html#event-close
async function startChild() {
  const childPath = path.join(__dirname, "child.js");
  child = spawn("node", [childPath]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return new Promise((res) => {
    child.on("close", (code, signal) => {
      res([code, signal]);
    });
  });
}

// 子プロセスが異常終了した場合、再起動する関数
async function monitorChild() {
    const [code, signal] = await startChild();
    
    if (code !== 0  ||  signal !== null) {
      startChild();
    }
}

// シグナルをトラップして、子プロセスに同じシグナルを送信する
// 参考：https://qiita.com/Kernel_OGSun/items/e96cef5487e25517a576
function catchSignals() {
  const signals = ["SIGINT", "SIGTERM"]; // 割り込み、終了

  signals.forEach((signal) => {
    process.on(signal, () => {
      if (child) {
        // 子プロセスにシグナルを送る
        child.kill(signal);

        // 子プロセスが終了したことを確認してからメインプロセスも終了
        child.on("close", () => {
          process.exit();
        });
      }
    });
  });
}

monitorChild();
catchSignals();