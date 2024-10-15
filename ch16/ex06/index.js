import fs from 'fs';

const filePath = "ch16/ex06/index.txt";

// ファイルを拡張（20バイトに設定）
fs.truncate(filePath, 20, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('ファイル拡張成功しました');
    }
});
