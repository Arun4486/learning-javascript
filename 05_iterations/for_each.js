// HIGHER ORDER FUNCTION AND FOR EACH LOOP

const coding = ["js", "cpp", "ruby"]

// from console
/*(3) ['js', 'cpp', 'ruby']
0: "js"
1: "cpp"
2: "ruby"
length: 3
[[Prototype]]: Array(0) */

coding.forEach( function  (item) {
    // console.log(item); //js cpp ruby
    
}) // callback fn don't have names

// ARROW FUNCTION
coding.forEach( (item) => {
    // console.log(item); //js cpp ruby
    
})

function printMe(item){
    console.log(item);
    
}

// coding.forEach(printMe) //js cpp ruby

// coding.forEach(  (item, index, arr) =>{
//     console.log(item, index, arr);
//     /*js 0 [ 'js', 'cpp', 'ruby' ]
//     cpp 1 [ 'js', 'cpp', 'ruby' ]
//     ruby 2 [ 'js', 'cpp', 'ruby' ] */
// })


// array of objs
const myCoding = [
    {
        name : "js",
        file : "name.js"
    },
    {
        name : "java",
        file: "name.java"
    },
    {
        name : "python",
        file : "name.py"
    }
]

myCoding.forEach( (item)=>{
    //console.log(item.file, item.name);
    /*name.js js
    name.java java
    name.py python */
})

const value = coding.forEach( (item)=>{
    return item;
})

console.log(value); // undefined , we can't store values into a variable by using for each loop(method)
