function fizzbuzz(n) {
    return [...Array(n)].map((_, i) => 
        (i + 1) % 3 === 0 ? 
            ((i + 1) % 5 === 0 ? 'FizzBuzz' : 'Fizz') :
            ((i + 1) % 5 === 0 ? 'Buzz' : (i + 1) || i.toString())
    ).join('\n') + '\n';
}

function sumOfSquaredDifference(f, g) {
    let result = [...Array(f.length)].reduce((sum, _, i) => 
      sum + (i < f.length ? Math.pow(f[i] - g[i], 2) : 0), 0);
    return result;
  }

  function sumOfEvensIsLargerThan42(array) {
    let sum = 0;
    array.forEach((i) => {
        if (i % 2 === 0) {
            sum += i;
            if (sum >= 42) {
                return true;
            }
        }
    });
    return false;
}

const f = [1, 2, 3];
const g = [4, 5, 6];
console.log(sumOfSquaredDifference(f,g))