- React, jQuery などの主要なフロントエンドフレームワークを選び、そのフレームワークを使っていればどのように XSS 対策がされるか、また使っていてもどのような XSS の危険が残るか記述しなさい。
- 回答：
    1. React：
        - XSS対策
            - 標準エスケープ
            - Dangerously Set InnerHTMLの利用
            - [参考](https://qiita.com/kazzzzzz/items/897f8ed89ca36a0734de)
        - 残る危険：dangerouslySetInnerHTMLを使用する際、信頼できないデータを直接挿入すると、XSSのリスクが発生する可能性がある
    1. JQuery：
        - XSS対策
            - HTMLエスケープ
            - .html()メソッドの利用
        - 残る危険：jQueryのイベントハンドラを設定する際にユーザー入力を使用すると、インジェクション攻撃のリスクが高まる。