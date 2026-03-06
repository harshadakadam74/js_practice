const coding = ["js","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

// foreach does not return anything, it is used to perform an action on each element of the array,
//  but it does not return a new array or any value. If you want to create a new array based on the original array,
// you can use the map method instead of foreach

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const filteredNums = myNums.filter( (num) => {
//      return num > 4 
//     })
// console.log(filteredNums);
//use the scope variable for use return kayword

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    {
        title : 'Book 1', genre:'fiction',published:'1981',
        edition:'2004'
    },
     {
        title : 'Book 2', genre:'fiction',published:'1981',
        edition:'2004'
    },
     {
        title : 'Book 3', genre:'fiction1',published:'1992',
        edition:'2004'
    },
     {
        title : 'Book 4', genre:'fiction2',published:'1999',
        edition:'2004'
    },
     {
        title : 'Book 5', genre:'fiction3',published:'2001',
        edition:'2004'
    },
     {
        title : 'Book 6', genre:'fiction4',published:'2008',
        edition:'2004'
    },
     {
        title : 'Book 7', genre:'fiction5',published:'2010',
        edition:'2004'
    }
];

let userbooks = books.filter( (bk) => bk.genre === 'fiction')

userbooks = books.filter( (bk) => {
    return bk.published >= '1995' && bk.genre === 'fiction3'
})
console.log(userbooks);

