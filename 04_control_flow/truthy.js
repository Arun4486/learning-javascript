const userEmail = "arun@mail"

// if(userEmail){
//     console.log("got user mail"); // got user mail
    
// }else{
//     console.log("don't have user mail");
    
// }

// falsy values
/*false, 0, -0, "", null, undefined, NaN */

// truthy values

// true, "0", 'false', " ", [], {}, function(){}, 

const arr = []
// if(arr.length===0) console.log("array is empty"); // array is empty

const emptyObj = {}
// if(Object.keys(emptyObj).length===0) console.log("obj is empty"); // obj is empty

// Nullish Coalescing operator (??) : null undefined
// it is a safty check for null or undefined values(prevent errors)
let val1;
val1 = 5?? 10;
// console.log(val1); // 5
let val2 = null ?? 10
// console.log(val2); // 10

let val3 = null ?? 10?? 20
// console.log(val3); // 10, it saves the first not null value in the variable


//Ternary Operator

// condition ? true : false

const price = 100

price >= 80 ? console.log("more than 80"): console.log("less than 80"); // more than 80;


