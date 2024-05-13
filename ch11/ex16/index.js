export function retryWithExponentialBackoff(func, maxRetry, callback) {
    let retryCount = 0;

    function retry() {
        // funcがtrueを返せばそこで終了する
        if (func() === true) {
            callback(true);
            // `maxRetry` 回リトライしても成功しない場合はそこで終了する
        } else if (retryCount < maxRetry) {
            retryCount++;
            // 呼び出し回数に応じて1秒, 2秒, 4秒, ...と2倍に増えていく
            setTimeout(retry, Math.pow(2, retryCount) * 1000);
        } else {
            callback(false);
        }
    }

    retry();
}
