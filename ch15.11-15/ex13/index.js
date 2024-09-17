// gemma2:2bは起動できますが、結果として、エラーが発生しました。
document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const inputBox = document.getElementById('input-box');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', async () => {
        const userMessage = inputBox.value.trim();
        if (userMessage === '') return;

        // ユーザーメッセージを表示
        displayMessage(userMessage, 'user');

        // API リクエストを送信
        const response = await getAIResponse(userMessage);
        displayMessage(response, 'ai');

        // 入力ボックスをクリア
        inputBox.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight; // スクロールを一番下にする
    });

    async function getAIResponse(message) {
        try {
            const response = await fetch('http://localhost:11434/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'llama3.1',
                    stream: true,
                    messages: [
                        { role: 'user', content: message }
                    ]
                })
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let result = '';
            let done = false;

            while (!done) {
                const { value, done: readerDone } = await reader.read();
                done = readerDone;
                result += decoder.decode(value, { stream: true });
            }

            return result;
        } catch (error) {
            console.error(error);
            return 'エラーが発生しました';
        }
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}-message`;
        messageElement.textContent = message;
        chatContainer.appendChild(messageElement);
    }
});
