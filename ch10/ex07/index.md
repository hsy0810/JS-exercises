# 分析
- `date-fns`が機能ごとにモジュールを分割し、個別の操作や処理を行うための関数がまとめられている
- `Luxon`がモジュール化された設計によって内部の実装とタイムゾーンの管理を分けている
    - `impl`には日付や時刻の操作に関連する内部実装が含まれる
    - `zones`には、タイムゾーンの取得や変更、オフセットの計算などが含まれる
- `Day.js`は最新のブラウザーの日付と時刻を解析、検証、操作、および表示する最小限のJavaScriptライブラリ。必要な機能を柔軟に追加したりカスタマイズしたりすることが可能です。
    - `locale`は日付や時刻のロケールに関連する設定やフォーマットを管理するモジュールのまとまり
    - `plugin`はDay.jsの機能を拡張したり、新たな機能を追加するための独立したモジュールのまとまり

---------------------------------------------------------------------------------    
# date-fns
- `add`XXX
- `differenceIn`XXX
- `each`XXX
- `end`XXX
- `format`XXX
- `get`XXX
- `hours`XXX
- `int`XXX
- `is`XXX
- `milliseconds`XXX
- `min`XXX
- `next`XXX
- `parse`XXX
- `previous`XXX
- `quarters`XXX
- `round`XXX
- `seconds`XXX
- `set`XXX
- `start`XXX
- `sub`XXX
- `years`XXX

# Luxon
- impl
- zones

# Day.js
- locale
- plugin
