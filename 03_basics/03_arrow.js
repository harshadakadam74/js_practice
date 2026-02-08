const user = {
    username: "kadam",
    price: 999,

    welcomeMess: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMess();
// user.username = "sam"
// user.welcomeMess();

console.log(this); //{} object

// function one(){
//     let username = "kadam"
//     console.log(this.username); //not use in this keyword in function
// }
// one()

// const one = function() {
//     let username = "kadam"
//     console.log(this.username);
// }
// one()

const one = () => {
    let username = "kadam"
    console.log(this);
}
one()

const addone = (num1,num2) => {
    return num1+num2
}

const addtwo = (num1,num2) => (num1+num2)

const addf = (num1,num2) => ({username:"hitesh"})

console.log(addtwo(3,4),addone(3,5))

const myarr = [1,2,3,4,5]

myarr.forEach(() => {})