const userEmail = []

if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "",null, undefined, NaN(not a number)

// turthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.key(emptyObj).length === 0 ){
    console.log("object is empty");   
}

// Nullish coalescing operator (??): null, undefined
let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10
// val1 = undefined ?? 
val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary operator
//  condition ? true : false

//  const iceTeaPrice = 100
//  iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

 
