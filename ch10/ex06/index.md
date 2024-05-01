# エクスポートしないjsファイルを複数回importする場合、import文の前後やimport先のコードの実行順序はどうなりますか。実証コードを作成し、予想してから実行結果を確認しなさい。

- 予想：import先の実行順序によって、順番に実行される

``` javascript
console.log('実行開始');

import './moduleA.js';

import './moduleB.js';

console.log('実行終了');
```
＝＞出力

```bash
実行開始
モジュールAが実行された
モジュールBが実行された
実行終了
```

- 結果：import文の前後や、import先のコードの実行順序とは関係なく、import文は一番最初に実行してしまう
＝＞出力

```bash
モジュールAが実行された
モジュールBが実行された
実行開始
実行終了
```