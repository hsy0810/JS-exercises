import fs from "fs"; 

fetch("http://localhost:8000/file.txt", {
  method: "PUT",
  body: fs.createReadStream("ch16/ex10/file.txt"),
  duplex: "half",
});

