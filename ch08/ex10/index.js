export function addMyCall(f){
    //myCallプロパティを追加
    f.myCall = function(context, ...args) {
        //関数 f を特定の context にバインドした新しい関数を作成
        const bound = f.bind(context);
        // バインドされた関数を返す
        return bound(...args);
    };
    return f;
}