import express from 'express';
import path from 'path';
import fs from 'fs';
const app = express();

export function serve(rootDirectory, port){
    
    // ポートをリッスン
    app.listen(port, () => {
        console.log("Listening on port", port);
    });

    // エンドポイントの定義
    app.use("/test/mirror", (request, response) => {
        response.setHeader("Content-Type", "text/plain; charset=UTF-8");
        response.writeHead(200);
        response.write(`${request.method} ${request.originalUrl} HTTP/${request.httpVersion}\r\n`);

        // ヘッダーの書き込み
        let headers = request.rawHeaders;
        for(let i = 0; i < headers.length; i += 2) {
            response.write(`${headers[i]}: ${headers[i+l]}\r\n`);
        }
        response.write("\r\n");
        request.pipe(response);
    });
    // その他処理
    app.use((request, response) => {
        const filename = path.join(rootDirectory, request.path);
        
        let type;
        switch (path.extname(filename)) {
            case ".html":
            case ".htm":
                type = "text/html";
                break;
            case ".js":
                type = "application/javascript";
                break;
            case ".png":
                type = "image/png";
                break;
            case ".txt":
                type = "text/plain";
                break;
            default:
                type = "application/octet-stream";
                break;
        }

        const stream = fs.createReadStream(filename);
        stream.once("readable", () => {
            response.setHeader("Content-Type", type);
            response.writeHead(200);
            stream.pipe(response);
        });

        stream.on("error", (err) => {
            response.setHeader("Content-Type", "text/plain; charset=UTF-8");
            response.writeHead(404);
            response.end(err.message);
        });
    });

};
export default app;

serve(process.argv[2] || "tmp", parseInt(process.argv[3]) || 8000
);
