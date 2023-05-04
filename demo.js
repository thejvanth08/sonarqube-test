let emptyObj = {
    name: "apple",
    unique: true,
    friends: {
        frd1: "mango",
        frd2: "orange"
    }
};

for(let prop in emptyObj) {
    console.log(prop);
}
console.log('age' in emptyObj);

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');