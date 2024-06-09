import fs from 'fs';

export function* readLines(filePath) {

    const bufferSize = 100;
    const buff = Buffer.alloc(bufferSize);
    let str = "";
    let left = "";
    let fd;

    try {
        fd = fs.openSync(filePath, "r");
        let bytesRead;
        while ((bytesRead = fs.readSync(fd, buff, 0, 20, null)) > 0) {
            str = left + buff.toString("utf8", 0, bytesRead);
            const lines = str.split(/\r?\n/);
            left = lines.pop();
            for (const line of lines) {
                yield line;
            }
        };

        if (left) {
            yield left;
        }
    }
    finally {
        fs.closeSync(fd);
    }


}
