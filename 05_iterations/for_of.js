// for of (like for each)
const arr = [1,3,4,2,2,3,4]

// for (const element of object) { // obj = > arr
    
// }

for (const num of arr){
     console.log(num);
     /*1
3
4
2
2
3
4 */
    
}

const greetings = "hello world";
for (const greet of greetings) {
    //console.log(`charecter is ${greet}`);
    
}

// MAPS
// holds unique key- value pairs in remembers in original insertion order of the keys
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// console.log(map); // Map(3) {'IN' => 'India','USA' => 'United States of America','Fr' => 'France'}

map.set('IN', "India");
// console.log(map); // Map(3) {'IN' => 'India','USA' => 'United States of America','Fr' => 'France'}


// looping through maps
for (const key of map){
    //console.log(key); // [ 'IN', 'India' ][ 'USA', 'United States of America' ][ 'Fr', 'France' ]
}

// for specific iteration

for (const [key, value] of map) {
    // console.log(key, ':-', value); // IN :- India USA :- United States of America Fr :- France
    
}

// for of loop on obj

const myObj = {
    'game1': "genshin",
    'game2':"valorant"
}

// for (const element of myObj) {
//     // console.log(element); //  myObj is not iterable, not by for of loop
    
// }
