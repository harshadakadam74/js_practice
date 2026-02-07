// conversion operation in js
// operations to convert data from one type to another
// type conversion in js


let score = "Harshada";

console.log(typeof score); //string
console.log(typeof (score));

let valueInNumber = Number(score); //convert string to number
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN => Not a Number

//"33" => 33
//"33abc" => NaN
//true => 1 , false => 0

let isLoggedIn = "Harshada";

let booleanIsLoggesIn = Boolean(isLoggedIn);
console.log(booleanIsLoggesIn);

// 1 => true
// 0 => false
// "" => false
// "Harshada" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); //string


// Operation

let value = 3; //positive value 
let negvalue = -value; //negative value 
console.log(negvalue); //-3 

console.log(2 + 2); //4
console.log(2 - 2); //0
console.log(2 * 2); //4
console.log(2 ** 2); //4
console.log(10 / 2); //5
console.log(10 % 3); //1

let str1 = "Hello";
let str2 = " Harshada";

let str3 = str1 + str2; //concatenation
console.log(str3); //Hello Harshada

console.log("1" + 2); //"12"
console.log(1 + "2"); //"12"
console.log("1" + 2 + 2); //"122"
console.log(1 + 2 + "2"); //"32"

console.log( (3 + 4) * 5 % 3 ) ; //2 //not using operator precedence

console.log(+true); //1
console.log(+""); //0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; 

console.log(num1,num2,num3); // 4 4 4

let gameCounter = 100;
gameCounter++; //postfix return the value before increment 
console.log(gameCounter); //101

--gameCounter; //prefix return the value after increment 
console.log(gameCounter); //100

//link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-converstion