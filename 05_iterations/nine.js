const myNum = [1,2,3]

// const myTotal = myNum.reduce( function (acc,currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNum.reduce( (acc,curr) => acc + curr,0)
console.log(myTotal);

const ShopCart = [
    {
        item:"js course",
        price:999
    },
     {
        item:"mobile course",
        price:9999
    },
     {
        item:"java course",
        price:8999
    },
     {
        item:" python course",
        price:6999
    },
     {
        item:"data course",
        price:12999
    }
]
const total = ShopCart.reduce( (acc,item) => acc +item.price,0)
console.log(total);
