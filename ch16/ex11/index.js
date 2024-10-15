import net from 'net';

// HTTPサーバの設定
export function serve() {
    const server = net.createServer((socket) => {
        socket.on('data', (data) => {
            const request = data.toString();
            const [requestLine] = request.split('\r\n');
            const [method, path] = requestLine.split(' ');
    
            if (method === 'GET' && path === '/') {
                // "/"が GET されたとき以下の HTML を返却する
                const responseBody = `
                <!doctype html>
                <html lang="ja">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Greeting Form</title>
                  </head>
                  <body>
                    <form action="/greeting" method="POST">
                      <label for="greeting">Name:</label>
                      <input type="text" id="name" name="name" />
                      <input type="text" id="greeting" name="greeting" />
                      <button type="submit">Submit</button>
                    </form>
                  </body>
                </html>
                `;
                const response = `HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Length: ${Buffer.byteLength(responseBody)}\r\n\r\n${responseBody}`;
                socket.write(response);
            } else if (method === 'POST' && path === '/greeting') {
                // フォームから`/greeting`に POST されたとき、
                // nameとgreeting の内容をボディに含む HTML を返却する
                const body = request.split('\r\n\r\n')[1];
                const params = new URLSearchParams(body);
                const name = params.get('name');
                const greeting = params.get('greeting');
    
                const responseBody = `
                <html>
                  <body>
                    <h1>Hello, ${name}!</h1>
                    <p>${greeting}</p>
                  </body>
                </html>
                `;
                const response = `HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Length: ${Buffer.byteLength(responseBody)}\r\n\r\n${responseBody}`;
                socket.write(response);
            } else {
                // 非対応のパスやメソッドに対する404または405レスポンス
                const response = `HTTP/1.1 404 Not Found\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n404 Not Found`;
                socket.write(response);
            }
            socket.end(); // クライアント接続を終了
        });
    });
    
    // サーバをリッスン
    const PORT = 8000;
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}
