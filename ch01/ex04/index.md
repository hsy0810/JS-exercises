以下の内容を index.html に保存し、Web ブラウザで開きなさい。
1. 開発者ツール (Chrome の場合 F12) のコンソール上に何が表示されるか予想し、結果が一致するか確認しなさい。
- 下記の内容を出力されることを予想しました。結果が一致しています
```
{ answer: 42 }
{ answer: 0 }
```

2. 開発者ツールを開いた状態のタブで HTML を開く場合と、HTML を開いた状態のタブで開発者ツールを開く場合とで、結果を比較しなさい。
- 開発者ツールを開いた状態のタブで HTML を開く場合
```
Object
{ answer: 0 }
Object
{ answer: 0 }
```
- HTML を開いた状態のタブで開発者ツールを開く場合
```
{ answer: 42 }
{ answer: 0 }
```

3. 常に期待した結果を得るためにはどのようにコードを修正すべきか答えなさい。
- lifeを別々に作る
```
const life = { answer: 42 };
console.log(life);
const life2 = {...life};
console.log(life);
```
