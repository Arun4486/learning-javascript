// ===  array  ====
// array objects in js are resizable and contain mixture of different data types 
// copy operation on array create shallow copies 
// shallow copies ---> copies of an object share same reference point (change in copies change original one too)
// deep copies  ---> don't share same reference point
const myArr =  [0,1,2,3,4,5]
// console.log(myArr[2]); //2

const myHeros = ["ironman", "spiderman"];
// console.log(myHeros[0]); //ironman

const newArr = Array(1,2,3,4);
// console.log(newArr[2]); // 3


// == array mathods ====
myArr.push(6); //to add element at the end
// console.log(myArr); //[0, 1, 2, 3,4, 5, 6]

myArr.pop() // to remove last element from array
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(9); // add element at the start, and shift all to next
// console.log(myArr); //[9, 0, 1, 2,3, 4, 5]

myArr.shift(); // works like pop(), but from start
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); //3
// console.log(myArr.indexOf(9)); // -1

const newAr = myArr.join(); // binds all values of myArr to newAr
// console.log(newAr); // 0,1,2,3,4,5
// console.log(typeof newAr); //string

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof myArr); //object

// slice, splice ========

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3);
// console.log(myn1); //[ 1, 2 ]
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3); //splice splits the original array and element in range are assigned to new arr and removed from old one
console.log(myn2); // [ 1, 2, 3 ]
console.log(myArr); //[ 0, 4, 5 ]



