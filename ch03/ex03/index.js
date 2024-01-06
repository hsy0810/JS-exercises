export const caculateFloat = (num1, num2) => {
    const result = num1 - num2 < Number.EPSILON;
    return result;
}

console.log(caculateFloat(0.3 - 0.2, 0.1));
console.log(caculateFloat(0.2 - 0.1, 0.1));