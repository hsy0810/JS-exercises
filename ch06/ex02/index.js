const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const newObject = Object.create(myObject);
console.log(Object.getPrototypeOf(newObject) === myObject); //true