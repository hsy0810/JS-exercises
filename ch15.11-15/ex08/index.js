const ws = new WebSocket('ws://localhost:3003');

function sendRequest(inputId) {
    const inputElement = document.getElementById(inputId);
    const requestMessage = inputElement.value;

    sendRequestToServer(requestMessage).then(response => {
        document.getElementById(`response${inputId.charAt(inputId.length - 1)}`).innerText = response;
    }).catch(error => {
        document.getElementById(`response${inputId.charAt(inputId.length - 1)}`).innerText = `Error: ${error.message}`;
    });
}

function sendRequestToServer(requestMessage) {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket('ws://localhost:3003');
        
        ws.onopen = () => ws.send(requestMessage);
        ws.onmessage = (event) => {
            if (event.data.startsWith(`Hello, ${requestMessage}`)) {
                resolve(event.data);
                ws.close();
            }
        };
        ws.onerror = (error) => reject(new Error('WebSocket error'));
        ws.onclose = () => reject(new Error('Connection closed'));
        
        setTimeout(() => reject(new Error('Request timed out')), 10000);
    });
}