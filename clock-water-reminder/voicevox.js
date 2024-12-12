// 参考: https://qiita.com/ahogemarumetano/items/554e95faf8749fac8631

import axios from 'axios';
import fs from 'fs';

const rpc = axios.create({ baseURL: "http://localhost:50021", proxy: false });

export async function genAudio(text, filepath) {
    
    /* まずtextを渡してsynthesis宛のパラメータを生成する、textはURLに付けるのでencodeURIで変換しておく。*/
    const audio_query = await rpc.post('audio_query?text=' + encodeURI(text) + '&speaker=1');

    //audio_queryで受け取った結果がaudio_query.dataに入っている。
    //このデータをメソッド:synthesisに渡すことで音声データを作ってもらえる
    //audio_query.dataはObjectで、synthesisに送る為にはstringで送る必要があるのでJSON.stringifyでstringに変換する
    const synthesis = await rpc.post("synthesis?speaker=1", JSON.stringify(audio_query.data), {
        responseType: 'arraybuffer',
        headers: {
            "accept": "audio/wav",
            "Content-Type": "application/json"
        }
    });

    //受け取った後、Bufferに変換して書き出す
    fs.writeFileSync(filepath, new Buffer.from(synthesis.data), 'binary');
}
genAudio("お水飲む時間だよ！早く飲まないとダメだからねっ！","./clock-water-reminder/audio/drinkwater.wav");
genAudio("今日の目標設定、できちゃったね！絶対に達成できるよ！頑張ってね、応援してるから！","./clock-water-reminder/audio/setgoal.wav");
genAudio("登録、完了しちゃったよ！やったね、すごい！","./clock-water-reminder/audio/logintake.wav");
genAudio("今日の目標、達成しちゃったね！おめでとう！明日も一緒に頑張ろうね！","./clock-water-reminder/audio/success.wav");
