## `$` や `\_` を変数名として利用するライブラリ
### JQuery
- JQueryとは、HTML文書の操作やイベント処理を容易に行うためのツールセット
- $(ドルマーク)の使い方
```sh
# IDがmyElementの要素を選択する例
var element = $('#myElement');

# クリックイベントの追加例
$('#myButton').click(function() {
  # クリック時の処理
});
```

### underscore.js
- underscore.jsとは、配列、オブジェクト、関数、コレクションなどの操作をシンプルかつ効率的に行うための便利なツール群
- 「`\_`」の使い方
```sh
# 配列
_.each([1, 2, 3], function(num) {
  console.log(num); // 各要素が順番に表示される
});

# 条件を満たす要素をフィルタリングする (_.filter)
var evenNumbers = _.filter([1, 2, 3, 4, 5], function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```