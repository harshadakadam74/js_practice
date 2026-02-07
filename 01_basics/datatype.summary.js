// javascript is a dynamically typed language.
// it means we dont have to specify data types while declaring a variable.
// javascript automatically allocates memory and decides the data type based on the value assigned to the variable.
// there are two types of data types in javascript 
// 1- primitive data types
// 2- reference data types OR Object types OR Non-primitive data types

//Primitive

// 7- type : string, Number, Boolean, undefined, null, symbol, BigInt

const score = 100; //number
const scoreValue = 100.3; //number

const isLoggedIn = false; //boolean
const outsideTemp = null; //null
let userEmail; //undefined

const id = Symbol('1234'); //symbol
const anotherId = Symbol('1234'); //symbol

console.log(id === anotherId); //false

const bigNumber = 1234567890123456789012345678901234567890n; //BigInt

// Reference type - Object

// Array , Objects , Functions

const heros = ["shaktiman","naagraj","doga"]; //Array
let myObj ={
    name: "Harshada",
    age: 20,
}

const myFunc = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber); //bigint

// http://262.ecma-international.org/5.1/#sec-11.4.3


//*************************************************************//

// Stack vs Heap memory

// Primitive data types are stored in stack memory
// Reference data types are stored in heap memory
// Stack memory is used to store primitive data types and function calls
// Heap memory is used to store objects and arrays

// Stack memory is faster than heap memory
// Stack memory is limited in size
// Heap memory is larger in size
// Primitive data types are faster to access than reference data types

// https://www.freecodecamp.org/news/stack-vs-heap-memory-all-you-need-to-know/

let myName = "Harshada"; //stored in stack menory

let anotherName = myName; //stored in stack menory
anotherName = "Harshu"; //new value stored in stack memory

console.log(myName); //Harshada
// myName is not changed because primitive data types are stored in stack memory
console.log(anotherName); //Harshu

let userOne = {
    email: "user@example.com",
    upi: "user@upi"
}
// stored in heap memory

let userTwo = userOne;

userTwo.email = "user2@example.com";

console.log(userOne.email); //user2@example.com
// userOne is changed because reference data types are stored in heap memory
console.log(userTwo.email); //user2@example.com
// both userOne and userTwo point to the same object in heap memory

