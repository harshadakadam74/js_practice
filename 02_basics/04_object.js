// const tainderUser = new Object()
const tainderUser = {}

tainderUser.id = "123abc"
tainderUser.name = "Sammy"
tainderUser.isLoggedIn = false

console.log(tainderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj4 = {5: "e",6: "f"}

// const obj3 = Object.assign( {}, obj1, obj2, obj4 )

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    }
]

users[1].email
console.log(tainderUser);

console.log(Object.keys(tainderUser));
console.log(Object.values(tainderUser));
console.log(Object.entries(tainderUser));

console.log(tainderUser.hasOwnProperty('isLoggedin')); //search 

//de-structure

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor,price} = course
// console.log(courseInstructor,price);
console.log(instructor,price);

const navbar = ({company}) => {

}
navbar(company = "hitesh")



