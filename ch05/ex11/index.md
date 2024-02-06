Node で debugger 文を使ってデバッグする方法

※[参考資料](https://nodejs.keicode.com/nodejs/debugger-basics.php)

1. コードにdebugger文を書く

```javascript
function f(o) {
   if (o === undifined) debugger;
}
```

2. Node.js をデバッグモードで起動する

```bash
$ node inspect index.js
```

3. ブレイクポイントを設定する

```bash
debug> sb(ファイル名, 行番号)
```

4. Node.js デバッガでの処理の実行、ステップ実行、ステップインなど

```bash
debug> c
break in index.js:10
```