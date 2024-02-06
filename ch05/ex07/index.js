function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

console.log(f());

//出力：false
//理由：finallyブロックはtryブロックの処理が終了すると、必ず実行されるため、最終の出力結果はfalseになる