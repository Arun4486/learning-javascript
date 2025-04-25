const array1 = [1,2,3,4];
//0+1+2+3+4

// const total = array1.reduce( function (acc, currVal){
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     /*acc : 0 and currVal : 1
//     acc : 1 and currVal : 2
//     acc : 3 and currVal : 3
//     acc : 6 and currVal : 4 */
//     return acc + currVal;
// }, 0 /*initial value for accumulator */); 
// console.log(total); // 10


const total = array1.reduce( (acc, currVal) => acc + currVal, 0 /*initial value */)
//console.log(total);

//=====use case ==========

const shoppingCart = [ 
    {
        item : 'js course', 
        price: 2999
    },
    {
        item:'py course', 
        price:3000
    },
    {
        item:'mob course',
        price: 4000
    },
    {
        item:'data science ',
        price: 5000
    }
];

// to add all these buoght courses

const totalPrice = shoppingCart.reduce((acc, item) => {
    return acc + item.price
},0)
// console.log(totalPrice); //14999



