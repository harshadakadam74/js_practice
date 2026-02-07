// variable declaration in javascript
// there are 3 ways to declare a variable in javascript
// 1- using var
// 2- using let
// 3- using const
// 4- implicitly declared variable (not recommended)
// var => function scoped variable 
// let => block scoped variable
// const => block scoped variable but value cannot be changed/reassigned
// implicitly declared variable => global scoped variable 
// prefer to use let and const for variable declaration
// avoid using var and implicitly declared variable
// ecma script 6 (ES6) introduced let and const
// example of variable declaration
// var, let, const, implicitly declared variable

const accountId = 12345; //constant variable
let accountEmail = "harshada@example.com"; //block scoped variable
var accountPassword = "1234567"; //function scoped variable
accountCity = "Pune"; //implicitly declared variable

// accountId = 123  //Not allowed as accountId is a constant variable

accountEmail = "email@.com"; //allowes as accountEmail is declared using let
accountPassword = "advd23"; //allowes as accountPassword is declared using var
accountCity = "mumbai"; //allowes as accountCity is implicitly declared variable

console.log(accountId); //12345

console.table({accountId,accountEmail,accountPassword,accountCity}); //Display variables in table format
/*
Prefer not use var
bacause of issue in block scope and functinal scope 
 */ 