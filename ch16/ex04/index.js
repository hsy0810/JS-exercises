import fs from 'fs';
import { Transform } from 'stream';
import iconv from 'iconv-lite';

// Shift_JIS を UTF-8 に変換する Transform ストリーム
const transText = new Transform({
  transform(chunk, _, callback) {

    // Shift_JIS から UTF-8 に変換
    const convertedChunk = iconv.decode(chunk, 'Shift_JIS');
    // UTF-8 にエンコード
    const utf8Buffer = iconv.encode(convertedChunk, 'UTF-8');
    callback(null, utf8Buffer);
  }
});

// 変換ストリームをパイプしてコンソールに出力
fs.createReadStream('hello.text').pipe(transText).on('data', (data) =>{
    console.log(data.toString('utf-8'));
})