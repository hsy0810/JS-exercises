// 選択ソート
// あるデータの中で線形探索で最小値を見つけ、その最小値を一番左の数字と入れ替えることを繰り返す
export function sort(array) {

    for (let i = 0; i < array.length-1; i++) {
      let min = array[i]; // 最小値を先頭の値を暫定する
      let minIndex = i; // 最小値のインデックス
  

      for(let j = i + 1; j<array.length; j++) {
        // 2番目から走査して、最小値と比較する。最小値より小さい場合、最小値のインデックスと交換する
        if(array[j] < min) {
            minIndex = j;
        }
      }

      // 最小値を見つけたら交換する
      const tmp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = tmp;

    }
    return array;
  }

  console.log(sort([5, 3, 8, 6, 2]));