- このようなセキュリティ機能があるとどのような攻撃を防御できるか記述しなさい。
- 回答：
    - XSS攻撃を防御できる
    - 理由：integrity 属性は、リソースの内容が予期されるハッシュと一致するかどうかを検証する。サーバーから提供されたリソースが、改ざんされたり、意図しないコードが埋め込まれていたりしないことを保証する。たとえば、攻撃者が悪意のあるスクリプトをリソースに注入する場合、そのリソースのハッシュが変更されるため、integrity 属性によってリソースがブロックされる。