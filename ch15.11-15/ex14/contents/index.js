"use strict";

const button = document.querySelector("#send-button");
const messageContainer = document.getElementById("message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getMessageFromServer();
});
async function getMessageFromServer() {

  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = "";
  messageContainer.appendChild(messageElement);

  // TODO: ここにサーバーとのやり取り等を実装しなさい
  // ボタンを非活性にする
  button.disabled = true;
  // EventSource インスタンスを作成し、サーバーと接続
  const eventSource = new EventSource("http://localhost:3000/message");

  // メッセージイベント
  eventSource.addEventListener("message", (event) => {
    messageElement.textContent = `受信メッセージ: ${event.data}`;
  });

  // エラーハンドラー
  eventSource.addEventListener("error", (error) => {
    messageElement.textContent = "エラーが発生しました";
    console.error(error);
    eventSource.close(); // エラー発生時に接続を閉じる
    button.disabled = false; // ボタンを再び活性化する
  });

  // 通信が終了した場合
  eventSource.addEventListener("end", () => {
    eventSource.close(); // EventSource を閉じる
    button.disabled = false; // ボタンを再び活性化する
  });
}
