const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb: 'ruby'
}

// for in loop

for (const key in myObject) {
    //console.log(key);
    /* js
    cpp
    rb*/
}
for (const value in myObject) {
    //console.log(value);// it also returns keys
    
}

// to access value we use myObject[key]

for (const key in myObject) {
    // console.log(`${key} is for ${myObject[key]}`);
    /*js is for javascript
cpp is for c++
rb is for ruby */
}

// trying for in on array

const arr = ["js", "rb", "cpp", "java",];
for (const key in arr) {
    //console.log(key);
    /*0
    1
    2
    3
     */
}
for (const key of arr) {
    //console.log(key);
    /*js
rb
cpp
java */
}
// for...of – Loop over values of an iterable (array, string, sets , maps),  for...in – Loop over object keys (property names)(onjects, array)
// for in returns keys as string, while for of returns value as output

for (const key in arr) {
    // console.log(arr[key]);
    /*js
rb
cpp
java */
}

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('Fr', "France");

// for (const key in map) {
//     console.log(key); // no output , maps are not iteratable
    
// }

