// function

function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("D");
    console.log("A");
}
sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);  
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
console.log("Result: ", result);

function loginUserMessage(username) {
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("harshada")); 
//not pass a value is this value is undefined
console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,1000));//valu1-200 ,valu2-300,num1-400,1000

const user = {
    username: "harsha",
    price:200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"sam",
    price: 366
})

const myNewArray = [200,300,400,700]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,3000,1000,500]));




