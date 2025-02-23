// we can declare an object in ways like
const tinderUser = new Object(); //singleton object
const tinUser = {};
// console.log(tinderUser); //{}
// console.log(tinUser); //{}

tinderUser.id = "12345";
// console.log(tinderUser); //{ id: '12345' }

tinderUser.name = "Arun";
tinderUser.isLoggedIn = true;
// console.log(tinderUser); //{ id: '12345', name: 'Arun', isLoggedIn: true }

// nesting in objects

const newUser = {
    email : "new@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Arun",
            lastName : "Katiyar"
        }
    }
}
// console.log(newUser.fullname.userFullName); //lastName

// combining objects

const obj1 = {1:"a", 2:"b",3:"c"};
const obj2 = {4:"d", 5:"e",6:"f"};

const obj3 = {obj1, obj2}; // all values going into obj1
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' }}
  
const obj5 = Object.assign(obj1 , obj2); //
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj4 = Object.assign({}, obj1, obj2); // '{}' giving a target to assign all values
// console.log(obj4); //  { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// or we can use spread operator
const obj6 = {...obj1, ...obj2};
// console.log(obj6); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// for iteration over list of objects

const arr = [
    {
        id : 1,
        email : "a@gmail.com",
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]
// console.log(arr[2].email); // c@gmail.com

const newObj = {
    name : "ak",
    email : "a@gmail.com",
    id: 101,
    isLoggedIn : false
}
// console.log(Object.keys(newObj));// [ 'name', 'email', 'id', 'isLoggedIn' ]
// console.log(Object.values(newObj)); // [ 'ak', 'a@gmail.com', 101, false ]
// console.log(Object.entries(newObj)); //[ [ 'name', 'ak' ], [ 'email', 'a@gmail.com' ], [ 'id', 101 ], [ 'isLoggedIn', false ] ]

// to check if any object has a specific property or not
// console.log(newObj.hasOwnProperty('email')); //true



// destructuring

const cource = {
    name : "chai_aur_js",
    price : 1000,
    instructor : "hitesh"
}

// console.log(cource.instructor); //hitesh

// if we need this value aften then it's easy to destructure it

const {instructor} = cource;
// console.log(instructor); // hitesh
// we can also rename it

const {instructor: inst} = cource;
// console.log(inst); // hitesh

// APIs application  can be an object or list of objects 
// {
//     "example" : "thisone",

// } this is jSON formate

