const mcu_Heros =  ["thor","ironman","hulk"];
const dc_Heros = ["superman","batman","flash"];

// mcu_Heros.push(dc_Heros); // array takes any type of input , push add new element to the existing array
// console.log(mcu_Heros);  //[ 'thor', 'ironman', 'hulk', [ 'superman', 'batman', 'flash' ] ]

// to get elements from dc array inside mcu we use 2d array access
// console.log(mcu_Heros[3][2]); // flash

// to get all elements combined we use cancat

const all_hero = mcu_Heros.concat(dc_Heros); // concats and return a new array
// console.log(all_hero); //[ 'thor', 'ironman', 'hulk', 'superman', 'batman', 'flash' ]

// spread operator

const all_heros01 = [...mcu_Heros, ...dc_Heros]; // it can take moree than two arrays 
// console.log(all_heros01); //[ 'thor', 'ironman', 'hulk', 'superman', 'batman', 'flash' ]

const newArray = [1,2,3,4,[5,6],7,[6,7,[2,4,7]]];
const new_another_array = newArray.flat(2); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(new_another_array); //[1, 2, 3, 4, 5,6, 7, 6, 7, 2,4, 7]

// console.log(Array.isArray("Arun")); //false

// for object to be converted into array we need to specify whether key in to be converted or the value

// console.log(Array.from({name: "Arun"})); //[]
// console.log(Array.from(Object.values({name: "Arun", age: 21}))); // [ 'Arun', 21 ]

let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ] "of" Returns a new array from a set of elements.


