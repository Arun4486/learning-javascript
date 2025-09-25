const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise is completed");
        resolve()
    }, 1000)
})

/**
 * promise represent completion or failure of async task
 * three states --> pending, fulfilled , rejected
 * Promise have one callback funciton which has 2 arguments, resolve(), and reject()
 * Resolve is used to pass data to .then()
 * reject is used to pass error or failuers to .catch()
 * Chained .then are used to pass async data to the next .then as it will not be fetched at the first time.
 */
promiseOne.then(function () {
    console.log("promise resolved");

})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task two");
        resolve()

    }, 1000)
}).then(function () {
    console.log("Promise consumed");

})


const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 3");
        resolve({ username: "Arun", email: "A@gmail.com" })

    }, 1000);
}).then(function (user) {
    console.log("user name is : ", user.username);

})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = false
        console.log("promise 4 created");

        if (!error) resolve({ username: 'Arun', pasword: '1345' })
        else console.log("someting went wrong");

    }, 1000)
}).then((user) => {
    return user.username
}).then((username) => {
    console.log(username);

}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")
)

/**
 * alternalety we use aync await to handle async task but there is no direct way to handle errors, so we use try catch inside async function
 * 
 */
/*
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        const error = true
        if (!error) {
            resolve({ username: 'abc', pasword: '1234' })
        } else {
            reject("js went wrong");
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        let res = await promiseFive
        console.log(res); // { username: 'abc', pasword: '1234' }
    }
    catch (error) {
        console.log(error); // one error true // js went wrong

    }

}
consumePromiseFive()

*/

// async function getAllUsers() {
//     try { 
//         let res = await fetch("http://jsonplaceholder.typicode.com/users")
//         let data = await res.json()
//         console.log(data);
//     } catch (error) {
//         console.log("err ", error);

//     }

// }
// getAllUsers()

fetch('http://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);

})