TypeScriptのトランスパイルは`@babel/preset-typescript`や`tsc`によって可能だが、それぞれの違いを調べなさい。

- `@babel/preset-typescript`は型チェックしない、型チャックは引き続き`tsc`で行う
- 必要に応じて、コード変換と同時に型定義ファイル（.d.tsファイル）の生成も`tsc`で行う
- `@babel/preset-typescript`は主にJavaScriptへのコード変換を担う

[参考](https://qiita.com/nacam403/items/edf3e2c8ff364aff910f)
