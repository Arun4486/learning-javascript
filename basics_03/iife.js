// IMMEDIATLY INVOKED FUNCTION EXPRESSION
// it's used to prevent disturbance of global varialbes(pollution) in a scope
// a function is wraped inside '()' and called ()

let now = 23;
(function chai(){
    // console.log(now);
    // console.log("DB CONNECED"); 
    
})() ;// ending by ';' is important bcz iife doesn;t no where to stop the execution
// chai() // chai is not defined
(function pani(){ // it's called named iife
    console.log(now);
    console.log("DB CONNECTTED");
    
})(); // it's working after stoping the previous execution

// we can also declare arrow function inside iife
( () => { // unnamed iife
    console.log("hello"); // hello
    
} )() ;

// to pass parameter for user defined values

( (name) => {
    console.log(`hello ${name}`);
    
} )("Arun"); // hello Arun