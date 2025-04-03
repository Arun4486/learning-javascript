// functions are used to reuse a portion of code multiple times as you want

function sayMyName() {
    console.log("Arun"); 
}
// sayMyName, this is taking reference of the function, Hence no output

// sayMyName(); // Arun, this is execution of the function

function addTwoNums(num1, num2){
    console.log(num1+num2);
    
}
// addTwoNums(); // NaN, no arguments
// addTwoNums(3,5); //8
// addTwoNums(3, "5"); // 35
// addTwoNums(3, "a"); //3a
// addTwoNums(3, null) //3

// parameteres, when defining the function
// arguments, when calling a function

// const result = addTwoNums(3, 5);
// console.log("result: ", result); //result:  undefined, return type was console .log

// for this we need to use return

function addNums(num1, num2) {
    let result = num1 + num2
    return result;
}
addNums(3, 6); // no output, no consol logging
const res = addNums(4,6);
// console.log("Result: ", res); // Result:  10

// parameters and arguments

function loggingUsers(username) {
    return `${username} just logged in`;

}

// console.log(loggingUsers("Arun")); //Arun just logged in

// console.log(loggingUsers()); //undefined just logged in
// to prevent such things, we need to give some conditions for taking inputs

function loggingInUsers(username) {
    // if (username === undefined) {
    //     console.log("please enter a username !");
    //     return 0;
    // }
    //OR
    if (! undefined) { // undifined or "" considered as 0 (false)
        console.log("please enter a username !");
        return 0;
    }
    return `${username} just logged in`;
}
// console.log(loggingInUsers()); // please enter a username ! 0

// we can also give a default value to that it never get undifined

function loggedUsers(username = "Arun") {
    return `${username} just logged in`;
}
// console.log(loggedUsers()); // Arun just logged in
// console.log(loggedUsers("Katiyar")); // Katiyar just logged in


// 03/03/25

function calculatePrice(num1){
    return num1;
}
// console.log(calculatePrice(2));

// forr unknown number of input, rest operatoe (...)
function calPrice(...num1){
    return num1;
}
// console.log(calPrice(2,1,3,1,3,1)); // [ 2, 1, 3, 1, 3, 1 ] , bundles up all input into an array

function calPriceValue(val1,val2,...num1) {
    return num1;
}
// console.log(calPriceValue(22,221,1221,12,3,1)); //[ 1221, 12, 3, 1 ] , all values except val1,val2

const user = {
    username : "Arun",
    price  : 199
}

function handleObj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
    
}

//handleObj(user); //username is Arun and price is 199, can pass any obj instead of user
// we can directly pass any obj without declaring it

// handleObj({
//     username:"Dolo",
//     price:399
// }) //username is Dolo and price is 399

const newarr = [1,2,4,2,2,4]
function returnResult(getarr){
    return getarr[2];
}
// console.log(returnResult(newarr)); //4
// console.log(returnResult([2,4,2,4,23,2])); //2

