このサーバでは Cookie を使ってクライアントのセッションを識別し、タスク一覧をセッションごとに分離して管理する簡易的な認証/認可を行っている。

同一ブラウザの異なるタブやウィンドウで http://localhost:3000/ を開いて ToDo リストの状態を確認する
- 同一ブラウザの異なるタブの場合、ToDoリストの状態は一緒です。
- 理由：同じセッション情報が共有されるため

シークレットウィンドウや異なるブラウザで http://localhost:3000/ を開いて ToDo リストの状態を確認する
- 異なるブラウザの場合、ToDoリストの状態が初期化されました。
- 理由：それぞれ独立したセッションが管理されるため

http://127.0.0.1:3000/ を開いて ToDo リストの状態を確認する
- ToDoリストが表示されない（接続が拒否されました）
- 理由: ブラウザが localhost で設定されたクッキーを 127.0.0.1 で認識しないため、セッションが維持できず、接続が拒否されたため