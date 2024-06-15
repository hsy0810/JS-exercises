

export function retryWithExponentialBackoff(func, maxRetry) {
    return new Promise((resolve, reject) => {
        let retryCount = 0;

        function retry() {
            func()
                .then(result => {
                    resolve(result); // 成功した場合は解決する
                })
                .catch(error => {
                    if (retryCount < maxRetry) {
                        retryCount++;
                        setTimeout(retry, Math.pow(2, retryCount) * 1000);
                    } else {
                        reject(error); // maxRetry 回数以上で失敗した場合は失敗させる
                    }
                });
        }

        retry();
    });
}

// 利用例 (HTTP リクエストの例)
const resp = await retryWithExponentialBackoff(
    () => fetch("https://example.com"),
    5
  );
  console.log(resp);
