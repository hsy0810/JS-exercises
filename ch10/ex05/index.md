# エクスポート元の関数・クラスをエディタのリファクタ機能で名前変更した際、インポート側で名前変更がどう追随されるか確認しなさい。
- F2を押して、名前を変更すると、インポート側でも名前変更される

# デフォルトエクスポートで名前変更時の挙動を確認する
- デフォルトエクスポートで名前変更すると、元の関数名でも、インポート側でも名前変更される

# 名前変更を伴うインポートで名前変更時の挙動を確認する
- 名前変更を伴うインポートで名前変更すると、エクスポート側では名前変更が発生するが、元のクラス名が変わらなった。代わりに、名前付きのエクスポートになった
```javascript
//名前付きエクスポート
export { Range as myRange};
```

# 再エクスポートで名前変更時の挙動を確認する
- 再エクスポートで名前変更すると、再エクスポートのモジュールを利用した場所だけ名前変更が発生する。元の関数、エクスポート先は変更されない。

```javascript
//index.jsで再エクスポート
export {Range, sum as add} from './myModule.js';

//new.jsでインポートして使用する
import {add, Range} from './index.js';

const result = add(1, 3);
console.log(result);
```