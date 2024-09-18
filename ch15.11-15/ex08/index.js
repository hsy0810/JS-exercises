let requestId = 0;

function generateRequestId() {
    return ++requestId;
}

async function sendRequest(message) {
    return new Promise((resolve, reject) => {
        const socket = new WebSocket("ws://localhost:3003/");

        const id = generateRequestId();
        setTimeout(() => {
            reject(new Error("タイムアウト"));
        }, 3000);

        socket.send(JSON.stringify({ id, body: message }));

        // 受信
        socket.onmessage = (event) => {
            try {
                const response = JSON.parse(event.data.body);
                if ((response.id = id)) {
                    resolve(response);
                }
            } catch (e) {
                reject(e);
            }
        };

        socket.onclose = () => {
            reject(new Error("WebSocketが切断されました"));
        };
    });
}

function receiveRequest() {
    const socket = new WebSocket("ws://localhost:3003/");
    socket.onmessage = (event) => {
        const response = JSON.parse(event.data.body);

        socket.send(
            JSON.stringify({
                id: response.id,
                message: `Hello, ${res.message}`,
            })
        );
    };
}

function setForm(inputId, buttonId, resTextId) {
    document.querySelector(`#${buttonId}`).addEventListener("click", async () => {
        const reqText = document.querySelector(`#${inputId}`).value;
        const resTextElement = document.querySelector(`#${resTextId}`);
        resTextElement.textContent = "Loading...";
        try {
            const res = await sendRequest(reqText);
            resTextElement.textContent = res;
        } catch (err) {
            resTextElement.textContent = err.message;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setForm("request1", "button1", "response1");
    setForm("request2", "button2", "response2");

    receiveRequest();
  });