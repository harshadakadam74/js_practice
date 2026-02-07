const name = "Harshada";
const repoCount = 50;

// console.log(name + repoCount + "Value"); //old way of concatenation this is not uses now a days

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Harshada-k-com");

console.log(gameName[0]); //to accress the index value 0
console.log(gameName.__proto__); //to see the properties and methods of staring

console.log(gameName.length); //to use length property
console.log(gameName.toLocaleUpperCase()); //to use  method to convert into uppercase

console.log(gameName.charAt(2)); //to use charAt method to get the character at index 2
console.log(gameName.indexOf('r')); //to use indexOf method to get the index of character 'r

const newString = gameName.substring(0,4); //to use substring method to get the string from index 0 to 4
console.log(newString);

const anotherString = gameName.slice(-8,4); //to use slice method to get the satring from index 0 to 4
console.log(anotherString);
// difference between substring and slice is that slice can take negative index but substring cannot take negative index


const url = "https://harshada.com/harshada%20choudhary";

console.log(url.replace('%20', '_')); // to use replace method to replace %20 with _

console.log(url.includes('harshada')); // to use include method to check if the string includes 'harshada' or not 
//it will return boolean value true or false


console.log(gameName.split('-')); //to use split method to split the string at - and return an array
//output will br ['Harshada', 'k', 'com']
// similarly we can split with space or any other character
// console.log(gameName.split('')); //it will split each character and return an array of characters 
//output will br ['H','a','r','s','h','a','d','a','-','k','-','c','o','m']
//console.log(gameName.split(' ')); //it will split at space and return an array of words

