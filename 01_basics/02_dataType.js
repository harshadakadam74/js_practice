// 01_basics/02_dataType.js
// Data types in javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


"use strict"; // treat all JS code as newer version

//alert (3 + 3) //we are using node.js , not browser 

console.log(3 
    +
     3); // code readability should

console.log("Harshada");

let name = "Harshada"; //String Data Type
let age = 22; //Number Data Type
let isLoggedIn = false; //Boolean Data Type
let state; //undefined Data Type
let accountBalance = null; //null Data Type //null is object

//number => 2 to power 53
//bigint => larger than 2 to power 53
//string => ""
//boolean => true/false
//null => standalone value
//undefined => value not assigned
//symbol => unique identifier

//object

console.log(typeof undefined); //type undefined
console.log(typeof null); //type object