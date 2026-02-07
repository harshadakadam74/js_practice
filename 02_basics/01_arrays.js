// Array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman","rogit"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

// Array Method

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) //add 9
myArr.shift() //remove 9

console.log(myArr.includes(9)) //false and data type boolean
console.log(myArr.indexOf(3)) //index 3

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr)  //change the type  convert the string

//slice and splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)  //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
//A [0,1,2,3,4,5]
// [1,2]
console.log(myn1);
console.log("B" , myArr);
//B [0,1,2,3,4,5]
//[1,2,3]

const myn2 = myArr.splice(1,3)
console.log("C" , myArr);
console.log(myn2);
//C [0,4,5]
// [1,2,3]

// slice()

// Used to extract a portion of an array (or string)

// Does not change the original data

// Follows the concept of immutability

// Mainly for reading / copying data

// splice()

// Used to add, remove, or replace elements

// Directly modifies the original array

// Follows the concept of mutation

// Mainly for editing data