async function g1() {
    // TODO: then のネストを無くしなさい
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("A");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("B");
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("C");

}

function g2() {
    // TODO: new Promise を使わないように書き換えなさい
    return wait(1000)
    .then(() => {
      console.log("A");
      return wait(2000);
    })
    .then(() => {
      console.log("B");
      return wait(3000);
    })
    .then(() => {
      console.log("C");
    });
}

function g3() {
    // 以下2つの関数が存在するとします (中身は適当)
    function fetchUser() {
        return Promise.resolve({ id: 42, name: "John" });
    }
    function fetchUserFriends(user) {
        return Promise.resolve([
            { name: "Sam", id: 100 },
            { name: "Bob", id: 1 },
        ]);
    }

    // TODO: var, let, const による変数宣言を無くしなさい。async/awaitは使用しないこと。
    return fetchUser()
    .then(user => {
        return fetchUserFriends(user).then(friends => ({ user, friends }));
    })
    .then(({ user, friends }) => {
        console.log(`${user.name} has ${friends.length} friends!`);
    });
}

function g4() {
    function someFunction() {
        return 42;
    }

    // NOTE: この関数 g4 は Promise を返す必要があるものとする
    // (利用しているフレームワークはライブラリがそういう関数を要求するとでも思って下さい)
    // TODO: new Promise を使わないように書き換えなさい。async/awaitは使用しないこと。
    let value = someFunction();
    return Promise.resolve(value);
}