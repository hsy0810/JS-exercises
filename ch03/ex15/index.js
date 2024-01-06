/* eslint-disable */
for (let i = 0; i < 10; i++) {
    (function () {
      let i = 100;
    })();
    console.log(i);
  }
  console.log(i);
  // console.log(i);
  //ReferenceError: i is not defined
  // iはブロックスコープ内でletを使って宣言したため、ブロックスコープ内のみ有効になります。
  //そのため、ブロックスコープ外のiは参照エラーが発生しました。


  /* eslint-disable */
for (var i = 0; i < 10; i++) {
    (function () {
        var i = 100;
    })();
    console.log(i);
  }
  console.log(i);
  // letをvarに置換すると、出力結果はエラーにならず、1~10を順番に出力できます
  //なぜなら、varを使って宣言した場合は、ブロックスコープになりません。

    /* eslint-disable */
for ( i = 0; i < 10; i++) {
    (function () {
         i = 100;
    })();
    console.log(i);
  }
  console.log(i);
  //すべてのletを削除すると、結果は100,101を出力します。
  //なぜなら、iはグローバルスコープで宣言された変数として扱われます。