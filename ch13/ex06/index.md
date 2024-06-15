jQuery Deferred について調べ `Promise` との関係性について説明しなさい。

- 関係性
    - jQuery 3.x 以降では、jQuery Deferred の代わりに標準の Promise を使うことが推奨されている。

    - jQuery Deferred から生成された Promise オブジェクトは、その後の操作においては通常の Promise と同様に扱うことができる。

- 違い
    - jQuery Deferred は jQuery ライブラリに含まれており、Promise は JavaScript の標準仕様。
    - jQuery Deferred は resolve()、reject()、notify() などの独自のメソッドを持ち、Promise は then()、catch()、finally() などの標準的なメソッドを持つ。
    - jQuery Deferred は jQuery 依存性があり、jQuery の他の機能と組み合わせて使われることが多いが、Promise はネイティブな機能であり、外部ライブラリに依存せずに使用可能。
    - Promise は ES6 で導入され、他のライブラリやフレームワークでも広くサポートされているが、jQuery Deferred は jQuery に依存する限定的な環境でのみ利用可能。


参考資料：
- https://qiita.com/atti/items/17fd8b11305a5375a1de

- https://qiita.com/fakefurcoronet/items/cb2d2eba1a2e39f6643d