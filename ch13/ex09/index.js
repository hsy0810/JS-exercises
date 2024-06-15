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

async function i1() {
    // NOTE: any で1つ Promise が解決された時に他の Promise はどうなるだろうか
    // 回答：
    // 1秒後42が出力され、そして2秒後100が出力される。
    //
    // 説明：
    // anyで最初に解決された Promise の値がvに代入される。wait1()の解決後、42がVに代入され、log(v)で出力される
    // そして、wait2()の解決後、100がvに代入され、log(v)で出力される
    let v = 0;
  
    v = await Promise.any([
      wait1().then(() => 42),
      wait2()
        .then(() => (v = 100))
        .then(() => 0),
    ]);
  
    log(v);
    await wait2();
    log(v);
  }
  
  async function i2() {
    // 回答：
    // 1秒後Cが出力され、そして2秒後Bが出力され、さらに3秒後Aが出力される。
    // その後、 ["A", "B", "C"] が出力される
    // 説明：
    // wait1()の解決後、logC()が実行される。そして、wait2()の解決後、logB()が実行される。
    // そして、wait3()の解決後、logC()が実行される。
    // 最後に、Promise.all は渡されたすべての Promise が解決されるのを待ち、それぞれの結果を配列として返す
    const v = await Promise.all([
      wait3().then(() => {
        logA();
        return "A";
      }),
      wait2().then(() => {
        logB();
        return "B";
      }),
      wait1().then(() => {
        logC();
        return "C";
      }),
    ]);
    log(v);
  }
  
  async function i3() {
    // NOTE: all で引数の1つが失敗すると他の Promise はどうなるだろうか
    // 回答：
    // 1秒後Yが出力され、続いて42が出力される。
    // そして2秒後Bが出力され、さらに3秒後0が出力される
    // 説明：
    // wait1()の解決後、errY()が実行される。この時点で wait3() の then ブロックはまだ実行されていないため、v は 42 のまま。
    // そして、wait2()の解決後、logB()が実行される。この時log(v)がwait3()の解決を待っているため、vが値が出力されていない
    // そして、wait3()の解決後、log(v)が実行される。
    let v = 42;
    try {
      await Promise.all([
        wait3().then(() => {
          v = 0;
          errX();
        }),
        wait2().then(() => {
          logB();
          return "B";
        }),
        wait1().then(() => {
          errY();
        }),
      ]);
    } catch (e) {
      log(e.message);
      log(v);
      await wait3();
      log(v);
    }
  }

  async function i4() {
    // NOTE: i5, i6 との比較用 (直列に処理を実行したいものとする)
    // 回答：
    // 5秒後0が出力され、続いて4秒後1が出力される。
    // そして3秒後2が出力され、続いて2秒後3が出力される。
    // さらに1秒後4が出力され、続いてCOMPLETEDが出力される。
    // 説明：
    // p は Promise.resolve(null) で初期化される
    // for ループが 0 から 4 まで 5 回実行され、p の値は、前のイテレーションでの Promise の解決後に、次の Promise を待機するチェーンに更新される。
    // i の値が増えるごとに待機時間は短くなる。
    // 最後に、p は全ての待機とログが終わった後に log("COMPLETED") が実行される。
    let p = Promise.resolve(null);
    for (let i = 0; i < 5; ++i) {
      p = p.then(() => wait((5 - i) * 1000).then(() => log(i)));
    }
    return p.then(() => log("COMPLETED"));
  }
  
  async function i5() {
    // NOTE: このコードは期待通りの挙動をすると考えられるだろうか？(典型的なミス)
    // 回答：
    // COMPLETEDが即座出力される
    // 1秒後4が出力され、続いて2秒後3が出力される。
    // そして3秒後2が出力され、続いて4秒後1が出力される。
    // さらに5後0が出力される。
    // 説明：
    //  p = p.then(wait((5 - i) * 1000).then(() => log(i)));で書くと、wait()即座実行され、出力結果はi4()と逆パターンだった。
    let p = Promise.resolve(null);
    for (let i = 0; i < 5; ++i) {
      p = p.then(wait((5 - i) * 1000).then(() => log(i)));
    }
    return p.then(() => log("COMPLETED"));
  }
  
  async function i6() {
    //回答：
    // 5秒後0が出力され、続いて4秒後1が出力される。
    // そして3秒後2が出力され、続いて2秒後3が出力される。
    // さらに1秒後4が出力され、続いてCOMPLETEDが出力される。
    // 説明：
    // p は Promise.resolve(null) で初期化される
    // for ループが 0 から 4 まで 5 回実行され、p の値は、前のイテレーションでの Promise の解決後に、次の Promise を待機するチェーンに更新される。
    // i の値が増えるごとに待機時間は短くなる。
    // 最後に、p は全ての待機とログが終わった後に log("COMPLETED") が実行される。
    return Promise.all(
      [0, 1, 2, 3, 4].map((i) => wait((5 - i) * 1000).then(() => log(i)))
    ).then(() => log("COMPLETED"));
  }

  async function i7() {
    // NOTE: i8 との比較用
    //回答：
    // 11秒後10が出力される
    // 説明：
    // Promise.allはp1 と p2 を並行して、実行両方のプロミスが完了するまで待機。
    // 両方のプロミスが完了した後に v の最終値をログに出力。
    let v = 0;
  
    // 1秒待った後に2秒間隔で value の値を更新
    const p1 = async () => {
      await wait1();
      for (let i = 0; i < 5; i++) {
        const next = v + 1;
        v = next;
        await wait2();
      }
    };
  
    // 2秒間隔で value の値を更新
    const p2 = async () => {
      for (let i = 0; i < 5; i++) {
        const next = v + 1;
        v = next;
        await wait2();
      }
    };
  
    await Promise.all([p1(), p2()]);
    log(v);
  }
  
  async function i8() {
    // NOTE: 複数の非同期処理が1つの変数に対し書き込みを行う場合、読み込みと書き込みの間に await が入るとどうなるだろうか
    // 回答：
    // 5が出力される
    // 説明：複数の非同期関数が同じ変数に対して書き込みを試みる場合、await が入ることでその間に他の非同期処理が実行される可能性がある。
    // つまり、非同期処理の競合が発生する。これにより、変数の最終的な値が予測困難になる。
    let v = 0;
  
    const p1 = async () => {
      await wait1();
      for (let i = 0; i < 5; i++) {
        // NOTE: value の読み込み (value + 1) と書き込み (value = ...) の間に await が...
        const next = v + 1;
        await wait2();
        v = next;
      }
    };
  
    const p2 = async () => {
      for (let i = 0; i < 5; i++) {
        const next = v + 1;
        await wait2();
        v = next;
      }
    };
  
    await Promise.all([p1(), p2()]);
    log(v);
  }

  i8()