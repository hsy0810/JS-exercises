const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for(const property in myObject) console.log(property);
for(const property in myObject) console.log([property]);