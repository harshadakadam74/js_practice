
const marvel_heros = ["thor" , "Ironman" , "spiderman"];
const dc_heros = ["Superman" , "flash" , "batman"];

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log((marvel_heros[3][1])); // 3 is index no one is [] index

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // ['thor' , 'Ironman' , spriderman' , 'superman' , 'flash','batman']

//different method

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // ['thor' , 'Ironman' , spriderman' , 'superman' , 'flash','batman']

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr = another_arr.flat(3)
console.log(real_another_arr);

console.log(Array.isArray("Harshada")); //false
console.log(Array.from("Harshada")); // ['H','a','r','s','h','a','d','a']

console.log(Array.from({name:"Harshada"})); // interesting //[] //defind the key and values

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1,score2,score3));
//[10,20,30]

// 1. Array.isArray() – Theory

// Array.isArray() is a static method of the Array object in JavaScript.
// It is used to check whether a given value is an array.
// In JavaScript, arrays are a special type of object, and the typeof operator returns "object" for arrays.
// Therefore, typeof cannot reliably distinguish arrays from other objects.
// Array.isArray() was introduced to provide a safe and accurate way to identify arrays.

// This method:
// Returns true if the value is an array
// Returns false otherwise
// Does not modify the original value
// Is mainly used for type checking and validation

// 2. Array.from() – Theory

// Array.from() is a static method used to create a new array from iterable or array-like objects.
// Array-like objects contain indexed elements and a length property but do not have array methods.
// Examples include strings, NodeLists, the arguments object, Sets, and Maps.
// Array.from() converts these objects into real arrays, enabling the use of array methods such as map(), filter(), and reduce().

// Key characteristics:
// Creates a new array instance
// Accepts an optional mapping function to transform elements
// Does not affect the original iterable or object
// Helps in working with DOM collections and other iterable structures


// 3. Array.of() – Theory

// Array.of() is a static method used to create a new array from a variable number of arguments.
// It was introduced to solve inconsistencies in the Array() constructor.
// When using Array() with a single numeric argument, JavaScript creates an empty array of that length instead of an array containing that number.
// Array.of() avoids this behavior by always treating arguments as elements.

// Characteristics:
// Creates an array with exactly the provided values
// Works consistently regardless of the number or type of arguments
// Ensures predictable array creation




