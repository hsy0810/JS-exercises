let array = ["r", "i", "c", "o", "h"];
delete array[3];

console.log("o" in array); // => false
console.log(array); // => [ 'r', 'i', 'c', <1 empty item>, 'h' ]
console.log(array.length); // => 5