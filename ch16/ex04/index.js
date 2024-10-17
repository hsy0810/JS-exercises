import fs from 'fs';
import { Transform } from 'stream';
import iconv from 'iconv-lite';

// テスト用に Shift_JIS で保存したいテキスト
const text = 'こんにちは';
const shiftJISText = iconv.encode(text, 'Shift_JIS');
// Shift_JIS ファイルを作成
fs.writeFileSync('./hello.txt', shiftJISText);

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
fs.createReadStream('./hello.txt').pipe(transText).on('data', (data) => {
  console.log(data.toString('utf-8'));
})


// fs.readFile('./hello.txt', function(err, data){
//   if (err) throw err;
//   const buf    = new Buffer(data, 'binary');     //バイナリバッファを一時的に作成する
//   const retStr = iconv.decode(buf, "Shift_JIS"); //作成したバッファを使い、iconv-liteでShift-jisからutf8に変換
//   console.log(retStr);
// });
