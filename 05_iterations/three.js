// // for of

// ["","","",""]
// [{},{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const ele of arr) {
    console.log(ele);
}

const greetings = "Hello world";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// maps
//map is not itertable
// map is a collection of key value pairs where kays can be of any data type and values can also be of any data type
//map is unique in nature and it maintains the order of insertion
// not allow duplicate kays but alloq duplicate values
const map = new Map()
map.set('IN',"India")
map.set('USA',"State of america")
map.set('Fr',"France")
map.set('IN',"India") // duplicate key not allowed but duplicate value is allowed

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key, ':-', value );
}