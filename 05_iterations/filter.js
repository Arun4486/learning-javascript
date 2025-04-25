// filter, The filter() method in JavaScript is used to create a new array with all elements that pass a test provided by a callback function.

const  myNums = [1,2,3,4,5,6,7,8,9,10];
//console.log( myNums.filter ((num) => num < 7));// undefined, it returns a new array according to a condition and it is to be stored in a array

// const evenNums = myNums.filter( num => num % 2 === 0); // emplicite return
const evenNums = myNums.filter( (num) => { // explicite return
    return num%2 === 0;
})
// console.log(evenNums); // [ 2, 4, 6, 8, 10 ]

// to do the same with for_each

const newNums = []
myNums.forEach( (num )=>{
    if( num % 2 === 0){
        newNums.push(num);
    }
})
// console.log(newNums) // [ 2, 4, 6, 8, 10 ]


const books = [{title : 'B1', genre : 'Fic', edition : 2004}, 
    {title : 'B2', genre : 'non-Fic', edition : 2008}, 
    {title : 'B3', genre : 'History', edition : 2007}, 
    {title : 'B4', genre : 'non-Fic', edition : 2010}, 
    {title : 'B5', genre : 'sci', edition : 2014}, 
    {title : 'B6', genre : 'Fic', edition : 2010}, 
    {title : 'B7', genre : 'History', edition : 1996}, 
    {title : 'B8', genre : 'sci', edition : 2016}, 
    {title : 'B9', genre : 'non-Fic', edition : 1989}
];
let userBooks = books.filter( (bks)=> {
    return bks.genre === 'History'
})
// console.log(userBooks); //{ title: 'B3', genre: 'History', edition: 2007 },{ title: 'B7', genre: 'History', edition: 1996 }

userBooks = books.filter((bks)=> {
    return bks.edition >= 2000;
})
// console.log(userBooks); //[{ title: 'B1', genre: 'Fic', edition: 2004 },{ title: 'B2', genre: 'non-Fic', edition: 2008 },{ title: 'B3', genre: 'History', edition: 2007 },{ title: 'B4', genre: 'non-Fic', edition: 2010 },{ title: 'B5', genre: 'sci', edition: 2014 },{ title: 'B6', genre: 'Fic', edition: 2010 },{ title: 'B8', genre: 'sci', edition: 2016 }]

userBooks = books.filter((bks)=>{
    return bks.genre === 'History' && bks.edition > 2000;
})

// console.log(userBooks); //[ { title: 'B3', genre: 'History', edition: 2007 } ]
