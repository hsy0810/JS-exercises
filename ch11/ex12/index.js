import fs from 'fs';

class FileSizeError extends Error {
    constructor(fileSize) {
        super(`ファイルのサイズ (${fileSize} bytes) が許容サイズをオーバーしました`);
        this.fileSize = fileSize;
    }
}

function getFile(filePath) {
    const maxSize = 0.01 * 1024 * 1024;
    //指定ファイルのサイズを取得する
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;
    // ファイルのサイズが許容サイズを超えているかチェック
    if (fileSizeInBytes > maxSize) {
        throw new FileSizeError(fileSizeInBytes);
    }

    return 'ファイルがロード成功しました';
}

const filePath = '/home/kashie/JS-exercises/ch01/ex08/asao_monogatari.txt'
console.log(getFile(filePath))