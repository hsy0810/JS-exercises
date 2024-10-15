主にクラウド上で動作するプログラムは、いわゆる Graceful Shutdown という動作が求められ、上記のような処理が必要な場合がある。Kubernetes や Amazon ECS などの Docker ランタイム上でコンテナの Graceful Shutdown のために送信されるシグナルの種類は何か書きなさい。

- SIGTERM（シグナル終了）
    - このシグナルを受け取ったプロセスは、クリーンアップや現在実行中のリクエストの処理を完了させ、適切に終了する時間を与えられる。

- SIGKILL（シグナル強制終了）
このシグナルを受け取ったプロセスは即座に終了させられ、Graceful Shutdown の処理を行うことはできない。

- [参考](https://docs.aws.amazon.com/ja_jp/AmazonECS/latest/developerguide/load-balancer-connection-draining.html)