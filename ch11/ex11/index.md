- performance.now()の精度とjavascriptの最適化の影響を受けたため、このような結果になった
    - performance.now()ミリ秒単位で時間を返す。非常に短い時間を測定しようとすると、精度の制限により実際の経過時間が正確に反映されないことがある。
    - JavaScriptエンジンはコードの実行を最適化するため、同じ操作を何度も繰り返すとその操作の実行時間が短くなることがある。