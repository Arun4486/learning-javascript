const accId = 1443;
let accEmail = "a@gmail.com";
var accPass = "a@123";
accCity = "delhi";

let accState; //variables that doesn't get assigned any value are called and return "undifigned"

// accId = 333; Not Allowed , const takes fixed values
// "var" can't resolve block or function scope so, it's not preferable...instead "let" is used as variable

accEmail = "b@gmail.com";
accPass = "b@123";
accCity = "Kanpur";


console.table([accId,accEmail,accPass,accCity,accState]); //console.table alternate for multiple msgs