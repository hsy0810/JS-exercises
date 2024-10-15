用語「マルチスレッド」について調べなさい。
- スレッドとは、プロセス内で命令を逐次的に実行する単位。並列処理を実現するためには、1つのプログラムの中で複数のスレッドを起動し、タスクを同時に処理します。これをマルチスレッドと呼ぶ。
- マルチスレッドは主にサーバーサイドにおいて、複数のリクエストを同時に処理したり、ネットワークIOを効率化したりするために利用される。
- [参考](https://qiita.com/KenyaSaitoh/items/8ff0a564ada70e3b5ee5)


最後にあなたのPCのCPUスペックを調査し、適切なスレッド数についての考察を記しなさい。
- Intel(R) Core(TM) i7-1185G7
@ 3.00GHz
- 8スレッド数は適切。実行時間が短く、効率的にCPUを利用しているように見える

```sh
$ node ch16/ex01/mFib.js 45 8
Worker 6 execution time: 536.714ms
Worker 4 execution time: 783.352ms
Worker 7 execution time: 1.104s
Worker 5 execution time: 1.726s
Worker 2 execution time: 2.447s
Worker 0 execution time: 3.737s
Worker 3 execution time: 5.300s
Worker 1 execution time: 7.494s
Total execution time: 7.502s
```