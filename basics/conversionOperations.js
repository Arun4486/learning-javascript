let score_1 = "33";

console.log("score_1type-> "+typeof score_1); // string or typeof(score_1)

let score_2 = "33ad";

console.log("score2type-> "+typeof score_2); // string

let scoreInnumber = Number(score_2);// the datatype for conversion is always capitalized

console.log("scoreInnumbertype-> "+typeof scoreInnumber); //number 

console.log("scoreInnumer-> "+scoreInnumber); //NaN (not a number) "33ad"

let score_3 = null;
console.log("score3type-> "+typeof score_3) //object
let score_3Innumber = Number(score_3);
console.log("score3Innumbertype-> "+typeof(score_3Innumber)); //number
console.log("score3-> "+score_3Innumber); //0

let score_4 = undefined;
console.log("score4type-> "+typeof score_4); //undifined
console.log("score4-> "+score_4); //undefined

let score4Innumber = Number(score_4);
console.log("score4Innumbertype-> "+typeof score4Innumber);//number
console.log("score4Innumber-> "+score4Innumber); //NaN

let score5 = true;
console.log("score5-> "+score5); //t1rue
console.log("score5type-> "+typeof score5);//boolean
let score5Innumber = Number(score5);
console.log("score5Innumber-> "+score5Innumber);// 1
console.log("score5Innumbertype-> "+typeof score5Innumber); //number

let islogged = 1;
let boolislogged = Boolean(islogged);
console.log("boolislogged-> "+boolislogged); //true
console.log("boolisloggedtype-> "+typeof boolislogged); //Boolean

//empty string converted in boolean return false and vise versa

let aNum = 33;
let stringNumber = String(aNum);
console.log("stringNumber->"+stringNumber); //33
console.log("stringnumbertype-> "+typeof stringNumber); //string