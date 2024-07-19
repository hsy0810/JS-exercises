export function taggedTemplate(strings, ...values) {
    let str = strings[0];
  
    for (let i = 0; i < values.length; i++) {
        str += typeof values[i] + strings[i + 1];
    }
    
    return str;
  }
