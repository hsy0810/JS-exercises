import fs from "fs"; 
import fetch from "node-fetch";


const filePath = "ch16/ex10/file.txt";
const url = "http://localhost:8000/foo/bar/hello.txt";
// fetchを使ってファイルをアップロード
fetch(url, {
  method: "PUT",
  body: fs.createReadStream(filePath),
})
  .then((response) => {
    if (response.ok) {
      return response.text(); // アップロード成功時のレスポンスをテキストとして取得
    }
    throw new Error("File upload failed: " + response.statusText);
  })
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
