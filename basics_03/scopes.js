//let , var and const

 let a =100;
// const b =20;
// var c =30;

console.log(a); // 100
// console.log(b); // 20
// console.log(c); // 30

if(true){
    let a =10;
    console.log("inner "+a);// inner 10
    
    const b =20;
    var c =30;
}
//console.log(a); // a is not defined// 
//console.log(b); // b is not defined
//console.log(c); // 30, con't resolve scope

