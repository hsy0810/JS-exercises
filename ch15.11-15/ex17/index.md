実際のサービスの通信をデベロッパーツールなどで眺めて CORS の設定を確認しなさい。

北國銀行のweb口座開設を例として、アクションはCreate：
- access-control-allow-credentials(クッキーや認証情報の送信が許可されているかどうか):true

- access-control-allow-headers(許可されているカスタムヘッダー):content-type,x-goog-api-key,x-user-agent

- access-control-allow-methods(許可されているHTTPメソッド):DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT

- access-control-allow-origin(サーバーが許可しているオリジン):https://www.youtube.com

- access-control-max-age(Preflightリクエストのキャッシュの最大期間):3600
