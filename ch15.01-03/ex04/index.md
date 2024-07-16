1. グローバルオブジェクトを参照する方法を、ブラウザ内、node内、ブラウザnode問わずの３種記しなさい。
- 回答：
    1. ブラウザ内=>window 
        ```javascript
            console.log(window); 
        ```
    1. Node.js 環境=>global
        ```javascript
            console.log(window); 
        ```
    1. ブラウザnode問わず=>
        ```javascript
            const globalObject = typeof window !== 'undefined' ? window : global;
            console.log(globalObject);
        ```

1. ブラウザとnodeのグローバルオブジェクトのプロパティやメソッドを比較し、ブラウザ独自のものを10程度記しなさい。
- [参考](https://note.com/sego_don01/n/n8449db75b3f9)
- 回答：
    1. window =>ブラウザウィンドウを表すオブジェクト
    1. document =>ページのDOMを表すオブジェクト
    1. localStorage =>データを保存するストレージオブジェクト
    1. sessionStorage =>データをセッションごとに保存するストレージオブジェクト
    1. navigator =>user agent情報を提供するオブジェクト
    1. history =>ブラウザの履歴を操作するためのオブジェクト
    1. screen =>ユーザーの画面のサイズや解像度などの情報を提供するオブジェクト
    1. XMLHttpRequest =>非同期でサーバーと通信するためのオブジェクト
    1. console =>デベロッパーツールのコンソールにメッセージを出力するためのオブジェクト
    1. alert =>ユーザーにメッセージを表示するためのオブジェクト

1. グローバルオブジェクトにundefinedが定義されていることを確認し、過去のES仕様でどのような問題が発生していたかを記しなさい。
- 回答：
    - undefined は代入可能なグローバルオブジェクトのプロパティ。 ECMAScript 3 では undefined を上書きすることができる。 ECMAScript 5 からグローバルの undefined を上書きできなくなったが（代入はできる）、スコープ変数として undefined をシャドーウィングすることができる
    - [参考](https://zenn.dev/lollipop_onl/articles/eoz-using-undef-on-js)