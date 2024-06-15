import {
    wait,
    wait0,
    wait1,
    wait2,
    wait3,
    log,
    logA,
    logB,
    logC,
    errX,
    errY
} from "./wait.js";

function f3() {
    // NOTE: then のコールバック内の例外は try/catch でキャッチできるだろうか

    // 回答：
    // 即座Cが出力され、そしてAが出力され、最後にerrXのエラーメッセージが出力される。
    //
    // 説明：
    //　wait(0)の解決後にlogA()が実行され、そしてerrXが実行される
    // try-catchブロックは、then() コールバック内でスローされたエラーをキャッチできない。
    // then() 内で発生した例外は try-catch ブロックの外側で処理される
    // finally() ブロックのlogCが実行される
    try {
        wait(0).then(logA).then(errX);
    } catch (e) {
        logB();
    } finally {
        logC();
    }
}

function f4() {
    // NOTE: f5 との比較用
    //
    // 回答：
    // 2秒後Aが出力される。そして、1秒後Bが出力される
    // 最後に100が出力される
    //
    // 説明：
    // wait2()の解決後、logAが実行され、40が返す。そして1秒後、logBが実行され、100が返す。
    // 最後にlog(v)が実行されるため。
    wait2()
        .then(() => {
            logA();
            return 40;
        })
        .then((value) =>
            wait(1000).then(() => {
                logB();
                return 100;
            })
        )
        .then((v) => log(v));
}

function f5() {
    // NOTE: 2つ目の then の引数が関数でなく Promise になっている (典型的なミス)
    //
    // 回答：
    // 2秒後Aが出力され、すぐBが出力され、最後に100が出力される
    //
    // 説明：
    // wait2()の解決後にlogAが実行され、40が返す。
    // そして、2つ目の .then() の内部の wait1()の解決後にlogBが実行され、100が返す。
    // 最後に次の.then()が実行される

    // 2つ目の then() の引数がプロミスであるため、内部のプロミスが解決されるまで待機します
    wait2()
        .then(() => {
            logA();
            return 40;
        })
        .then(
            wait1().then(() => {
                logB();
                return 100;
            })
        )
        .then((v) => log(v));
}

function f6() {
    // NOTE: 1つの Promise に対し then を2回呼び出すとどうなるか
    //
    // 回答：
    // 1秒後Aが出力され、その1秒後Bが出力され、さらに2秒後Cが出力される
    //
    // 説明：
    // wait1()の解決後に logA() が実行される。このPromiseは p に関連付けられる。
    // 次に、p.then(() => wait1()).then(logB) が実行される。これは新しい Promise チェーンが作成される。
    // このPromiseチェーンは、p の解決には影響を与えず、wait1()の解決後に logB()が実行される。
    // 最後に、p.then(() => wait2()).then(logC) が実行される。これも新しい Promise チェーンが作成される
    // このPromiseチェーンは、p の解決には影響を与えず、wait2()の解決後に logC()が実行される。
    // つまり、p の解決は1度だけ行われるが、それに関連付けられた then() は独立して動作する。

    const p = wait1().then(logA);
    p.then(() => wait1()).then(logB);
    p.then(() => wait2()).then(logC);
}

function f7() {
    // NOTE: 2つ目の wait の引数が実行される差には p は解決済み
    // (= 解決済みの Promise の then を呼び出すとどうなるか)
    //
    // 回答：
    // 1秒後Aが出力され、その2秒後Bが出力されるとCも即座出力される
    //
    // 説明：
    // wait1()の解決後にlogAが実行される。このPromiseはpに関連付けられる
    // wait2()の解決後に.then()は、p が既に解決されているため、即座にlogAが実行される
    // 最後にlogCが実行される
    const p = wait1().then(logA);
    wait2()
        .then(() => {
            return p.then(logB);
        })
        .then(logC);
}

function f8() {
    // NOTE: f9, f10 との比較用
    //
    // 回答：
    // 1秒後Xが出力され、Aも即座出力される
    // 
    // 説明：
    // wait1()の解決後にエラーが発生したらErrorXがスローされる。
    // catch()が実行され、エラーメッセージを出力する
    // 最後にlogAが実行される
    wait1()
        .then(errX)
        .then(errY)
        .catch((e) => log(e.message))
        .finally(logA);
}

function f9() {
    // NOTE: f12 との比較用
    //
    // 回答：1秒後Yが出力され、Aも即座出力される
    //
    // 説明：
    // wait1()の解決後に42が返す。そしてerrYが実行され、エラーをスローする。
    // catch()が実行され、エラーメッセージを出力する
    // 最後にlogAが即座実行される
    wait1()
        .then(() => 42)
        .then(errY)
        .catch((e) => log(e.message))
        .finally(logA);
}

function f10() {
    // NOTE: then(r, c) と then(r).catch(c) は等しいか？
    // 
    // 回答：1秒後Aが出力され、errYのエラーメッセージが出力される
    //
    // 説明：
    // wait1()の解決後に42が返す。そして、errYが実行され、エラーメッセージがログに出す
    // 最後にlogAが実行される
    // then(r,c)はthen(r, c) は成功とエラーの両方のパスでエラーをキャッチする
    // then(r).catch(c)はエラーのパスでのみエラーをキャッチする
    wait1()
        .then(() => 42)
        .then(errY, (e) => log(e.message))
        .finally(logA);
}

function f11() {
    // f12 との比較用: new Promise 内の throw は .catch でキャッチできるか？
    //
    // 回答：
    // Xが即座出力される
    // 
    // 説明：
    // 新しいプロミスを作成し、すぐに errX() を呼び出してエラーをスローする。
    // そしてcatch() ブロックは、errX() がスローしたエラーをキャッチし、エラーメッセージをログに出力する。
    new Promise((resolve, reject) => {
        errX();
    }).catch((e) => log(e.message));
}

function f12() {
    // new Promise 内だがコールバック関数で throw した場合は？
    //
    // 回答：
    // errXのエラーメッセージが出力される
    //
    // 説明：
    // 新しいプロミスを作成し、setTimeout を使用して非同期に errX() を呼び出す
    // そして、setTimeout は次のイベントループで errX() を実行するため、エラーは非同期にスローされる
    // 最後に、catch() ブロックは、errX() がスローしたエラーをキャッチし、エラーメッセージをログに出力する
    new Promise((resolve, reject) => {
        setTimeout(() => errX(), 0);
    }).catch((e) => log(e.message));
}

f3()
f4()
f5()
f6()
f7()
f8()
f9()
f10()
f11()
f12()