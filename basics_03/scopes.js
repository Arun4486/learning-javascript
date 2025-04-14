//let , var and const
// var can be redeclared(datatype) and updated, 
// let can't be redeclared but can be updated,
// const can neither be redeclared nor updated 
 let a =100;
// const b =20;
// var c =30;

//console.log(a); // 100
// console.log(b); // 20
// console.log(c); // 30

if(true){
    let a =10;
    //console.log("inner "+a);// inner 10
    
    const b =20;
    var c =30;
}
//console.log(a); // a is not defined// 
//console.log(b); // b is not defined
//console.log(c); // 30, con't resolve scope



// nested scopes

function one(){
    const username = "arun"

    function two(){
        const website = "yt"
        console.log(username); // arun
    }
    console.log(website); //website is not defined, and two does not get executed bcz of line by line execution
    two()
}
//one()

if (true){
    const username = "arun";
    if(username=="arun"){
        const website = "yt";
        //console.log(username+website); // arunyt
        
    }
    // console.log(website); // website is not defined
}
// console.log(username); // username is not defined

//========== interesting  ==================

// hoisting is a technique in which execution context of the functions and variables in documented

//console.log(addOne(5)); //6 , no errors


function addOne(num){
    return num+1;
}

//console.log(addOne(5)); //6, this can also be called before the declaration of the functions, executes with no errors

// console.log(addTwo(5)); // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2;
}

//console.log(addTwo(5)); //7, this is called an expression this gives error if called before the declaration of the function
