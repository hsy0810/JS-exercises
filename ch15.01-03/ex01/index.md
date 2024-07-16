- ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
- 回答；
    - デフォルトの動作（ページのリロード）をキャンセルして、現状を維持するため


- index.html ファイル内の script タグから `type="module"` 属性を削除した場合、期待通り動作させるにはどうすべきか答えなさい。
- 回答：
    -  <script src="/ch15.01-03/ex01/index.js" defer ></script>
    - type属性の値としてmoduleを指定すると、リソースはモジュールとして読み込まれるようになる。この場合、defer属性と同じであるため、type = moduleを削除して、deferを使ったら期待通りに動作できる
    - [参考](https://zenn.dev/oreo2990/articles/a93d3b1088c2fc)