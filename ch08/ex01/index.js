// パラメーターは２つあるため、()は要ります。
export const createArray = (n,c) => {
    // 文字cをn回コンソール出力
  for (let i = 0; i < n; i++) {
    console.log(c);
  }

  // 文字cをn個含む配列を生成して返す
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(c);
  }
  // この関数の本体では、returnだけではなく、かつ戻り値となる式がオブジェクトリテラルでもないため、｛｝は省略できます。
  return arr;
}

// 引数は1つしかないため、()は要りません。
// 戻り値はオブジェクトリテラルではないため、{}は要りません。
export const factorial = x => {return x * x};

// 引数なしのため、()は要ります。
// この関数の本文はreturnだけ、かつ戻り値はオブジェクトリテラルのため、{}は要ります。
export const getCurrentTime = () => {return {now: new Date()};};