let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break;
    } finally {
        continue;
    }
}

console.log(x);

//出力：5
//理由：
// 1. iは5までループに回る。
// 2. xにiの値を代入する。最終に代入した値は5。
// 3. tryブロックが実行され、そこで例外が発生する。catchブロックで例外をキャッチして、breakでループを終了する
// 4. finallyブロックは必ず実行するため、そこでcontinueがあるため、ループが次に進む。そして、ループが終了（＝5が代入する）まで実行して、最終に出力された値は5である。