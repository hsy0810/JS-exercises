// resize
function resize(params) {
    let maxWidth = 600;
    let maxHeight = 480;
  
    if (params && params.maxWidth) {
      maxWidth = params.maxWidth;
    }
  
    if (params && params.maxHeight) {
      maxHeight = params.maxHeight;
    }
  
    console.log({ maxWidth, maxHeight });
  }
  console.log(resize({width: 400}));

// resize1
// `if` を利用せず `&&` や `||` を用いて `maxWidth` や `maxHeight` を設定する関数 (`resize1`)
function resize1(params) {
    let maxWidth = params && params.maxWidth || 600;
    let maxHeight = params && params.maxHeight || 480;
  
    console.log({ maxWidth, maxHeight });
  }


// resize2
// `if` を利用せず `?.` や `??` を用いて `maxWidth` や `maxHeight` を設定する関数 (`resize2`)
function resize2(params) {
    let maxWidth = params?.maxWidth ?? 600;
    let maxHeight = params?.maxHeight ?? 480;
  
    console.log({ maxWidth, maxHeight });
  } 