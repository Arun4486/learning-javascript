// for_each to execute a function on every element
// map for tranformation of each element of array and return a new one
const nums = [1,2,3,4,5,6,7,8,9,10];

let newNums = nums.map((n)=> {return n+10});
// console.log(newNums); // [11, 12, 13, 14, 15,16, 17, 18, 19, 20]

//========== chaining =========
// using more than one methods on top of one another

newNums = nums
            .map((num) => num*10)
            .map((num) => num+1)
            .filter((num) => num > 50) 
// console.log(newNums); // [ 51, 61, 71, 81, 91, 101 ]
