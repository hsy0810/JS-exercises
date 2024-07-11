export function taggedTemplate(strings, ...values) {
    let str = strings[0];
  
    for (let i = 0; i < values.length; i++) {
        str += typeof values[i] + strings[i + 1];
    }
    
    return str;
  }

  const result1 = taggedTemplate`${"A"}`;          // "string"
const result2 = taggedTemplate`${{ x: 1 }}`;      // "object"


console.log(result1); // "string"
console.log(result2); // "object"
