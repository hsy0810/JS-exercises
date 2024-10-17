標準入力、標準出力、標準エラー出力、リダイレクト、パイプという単語について調べなさい
- 標準入力：プログラムがデータを受け取るためのデフォルトの入力ストリーム。通常、キーボードからの入力を指すが、ファイルや他のプログラムからのデータでも使用できる。
- 標準出力：プログラムがデータを出力するためのデフォルトの出力ストリーム。通常、画面（コンソール）に表示される。
- 標準エラー出力：プログラムがエラーメッセージを出力するためのデフォルトの出力ストリーム。通常、エラー情報を画面に表示する。プログラムのエラーメッセージや警告をユーザーに知らせるために使用される。
- リダイレクト：プログラムの入力または出力のストリームを変更すること。通常、標準入力、標準出力、標準エラー出力を他のファイルやデバイスに接続することが含まれる。
- パイプ：一つのプログラムの標準出力を別のプログラムの標準入力に接続する方法。データがプログラム間で直接流れるため、処理を連結することができる。


- `node cat.mjs`
    - 何も表示されない。入力待ちの状態

- `echo FOO | node cat.mjs`
    - FOOが表示される

- `node cat.mjs > output.txt`
    - output.txtがフォルダ内に追加される

- `node cat.mjs file`
    - file の内容がコンソールに表示される

- `node cat.mjs file > output.txt`
    - file の内容が output.txt に書き込まれ

- `node cat.mjs invalid-file > output.txt`
    - invalid-file が存在しないため、出力は output.txt に書き込まれない。
    - エラーメッセージはコンソールに表示される
        `Error: ENOENT: no such file or directory`

- `node cat.mjs invalid-file 2> error.txt`
    - エラーメッセージが error.txt に書き込まれる