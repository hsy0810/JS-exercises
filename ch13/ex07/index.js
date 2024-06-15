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

async function h1() {
    // 回答：
    // 3秒後Aが出力され、そして2秒後Bが出力され、そして1秒後Cが出力される。
    //
    // 説明：
    //　wait3()の解決後にlogA()が実行される
    // そしてwait2()の解決後、logB()が実行される
    // そしてwait1()の解決後、logC()が実行される
    try {
      await wait3();
      logA();
      await wait2();
      logB();
      await wait1();
      logC();
    } catch (e) {
      log(e.message);
    }
  }
  
  function h2() {
    // NOTE: h3 との比較用
    // 回答：
    // Xが即座出力される
    //
    // 説明：
    // new PromiseでPromiseが作成され、すぐに実行される
    // errX()がPromiseのコンストラクタ内で同期的に呼び出される。
    // その結果がPromise内部で直ちに処理され、結果としてXが即座に出力される
    new Promise(() => {
      errX();
    }).catch((e) => log(e.message));
  }

  function h3() {
    // NOTE: new Promise の引数が async function の場合、例外はどう扱われるだろう
    // 回答：
    // throw new Error("X")
    //
    // 説明：
    // 新しい Promise が作成され、Promise コンストラクタは async 関数を引数として受け取る。
    // async 関数内で、未定義の関数 errX() を呼び出して、Promise は .catch() でキャッチする。
    new Promise(async () => {
      errX();
    }).catch((e) => log(e.message));
  }
  
  async function h4() {
    // NOTE: 2つの例外は両方 catch できるか？
    // 回答：
    // 1秒後throw new Error("Y")
    //
    // 説明：
    // errX()とerrY()がスローした例外は、別の Promise チェーンで発生するため、同じ try-catch ブロックではキャッチされない。
    try {
      const p1 = wait2().then(() => {
        errX();
      });
      const p2 = wait1().then(() => {
        errY();
      });
      await p1;
      await p2;
    } catch (e) {
      log(e.message);
    }
  }
