古い JavaScript のコードでは `undefined` と比較を行う際に:

```js
if (foo === undefined) { ... }
```

ではなく以下のように書かれたコードを見ることがある (注: `void 0` は `undefined` を返す)。

```js
if (foo === void 0) { ... }
```

これにはどのような理由があるか、また今ではこのような書き方をしないのは何故か調べて回答しなさい。


- 昔は`void 0`を使う理由：
    - `undefined`は変数、上書きされることができる。常に`undefined`である保証はどこにもない。`void 0`は常に`undefined`を返すことが保証できる。
    ```js
    alert(undefined); // "undefined"
    var undefined = "こんにちは";
    alert(undefined) // "こんにちは"
    ```

- 今は`void 0`を使わない理由：
    - 現代の JavaScript エンジンやコーディング規約では、`undefined` が上書きされることはまれであり、undefined を直接使用することが一般的に安全。
    - ESLintなどの解析ツールを使って、`undefined`を保護できる。