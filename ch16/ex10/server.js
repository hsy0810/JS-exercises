import http from "http";
import url from "url";
import path from "path";
import fs from "fs";

function serve(rootDirectory, port) {
    const server = new http.Server();
    server.listen(port);
    console.log("Listening on port", port);

    server.on("request", (request, response) => {
        const endpoint = url.parse(request.url).pathname;

        if (request.method === "PUT") {
            // アップロード処理
            // リクエストされたURLパスをもとに保存するファイルのパスを決定
            const writeStream = fs.createWriteStream(`ch16/ex10/foo/bar${endpoint}`);
            // リクエストボディからデータを受信するたびに発生
            request.on("data", (data) => {
                // ファイルストリームにデータを書き込む
                writeStream.write(data);
              });
              // リクエストボディの受信が完了したときに発生
              request.on("end", () => {
                // クライアントにレスポンスを返して、書き込み終了
                response.end();
                // 書き込みストリームを閉じる（ファイルを保存して完了）
                return writeStream.end();
              });
        } else if (endpoint === "/test/mirror") {
            response.setHeader("Content-Type", "text/plain; charset=UTF-8");
            response.writeHead(200);
            response.write(`${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`);

            const headers = request.rawHeaders;
            for (let i = 0; i < headers.length; i += 2) {
                response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
            }
            response.write("\r\n");
            request.pipe(response);
        } else {
            let filename = endpoint.substring(1);
            filename = filename.replace(/\.\.\//g, "");
            filename = path.resolve(rootDirectory, filename);

            let type;
            switch (path.extname(filename)) {
                case ".html":
                case ".htm":
                    type = "text/html";
                    break;
                case ".js":
                    type = "application/css"; 
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
        }
    });
}

serve(process.argv[2] || "tmp", parseInt(process.argv[3]) || 8000);
