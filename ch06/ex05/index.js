// プロトタイプ作成
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};

//myObjectからプロパティを継承
const newObject = Object.create(myObject); 

//プロトタイプと同名と同名でない数字、文字列のプロパティをもつ
newObject.age = 40;
newObject.job = 'SE';

// 列挙不可のプロパティを追加
Object.defineProperty(myObject, 'name', {
    value: 'Jack',
    enumerable: false
});


for (const prop in newObject) {
    console.log(`${prop}: ${newObject[prop]}`);
}

//出力
//age: 40
//job: SE
//city: New York