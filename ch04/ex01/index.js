// 実部と虚部をプロパティとして持つ 2 つの複素数オブジェクトを引数として、
// 四則演算の結果を返す関数 `add`、`sub`、`mul`、`div` を実装しなさい。

export function getOperator(imaginary) {
    const operator = imaginary >= 0 ? '+' : '-';
    return operator;
}

//足し算
export function add (complex1, complex2) {
    let real = complex1.real + complex2.real;
    let imaginary = complex1.imaginary + complex2.imaginary;
    let operator = getOperator(imaginary);
    return `${real} ${operator} ${Math.abs(imaginary)}i`; 
}

// 引き算
export function sub (complex1, complex2) {
    let real = complex1.real - complex2.real;
    let imaginary = complex1.imaginary - complex2.imaginary;
    let operator = getOperator(imaginary);
    return `${real} ${operator} ${Math.abs(imaginary)}i`; 
}

//掛け算
export function mul (complex1, complex2) {
    let real = complex1.real * complex2.real - complex1.imaginary * complex2.imaginary;
    let imaginary = complex1.real * complex2.imaginary + complex1.imaginary * complex2.real;
    let operator = getOperator(imaginary);
    return `${real} ${operator} ${Math.abs(imaginary)}i` 
}

//割り算
export function div (complex1, complex2) {
    let real = (complex1.real * complex2.real + complex1.imaginary * complex2.imaginary) / Math.pow(complex2.real, 2) + Math.pow(complex2.imaginary, 2);
    let imaginary = complex1.imaginary * complex2.real - complex1.real * complex2.imaginary / Math.pow(complex2.real, 2) + Math.pow(complex2.imaginary, 2);
    let operator = getOperator(imaginary);
    return `${real} ${operator} ${Math.abs(imaginary)}i` 
}