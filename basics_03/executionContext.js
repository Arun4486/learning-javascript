// => exe contxt
/* => 1. GLOBAL EC
   => 2. FUNCTION EC
   => 3. EVAL EC
   The code executes in two phases Memory creation phase and Exe phase
   */

let val1 = 5;
let val2 = 10;

function addNums(num1,num2){
    let total = num1+num2;
    return total;
}
const result1 = addNums(val1,val2);
const result2 = addNums(10,2);

/*steps for execution 
1. Global EC assign to 'this'
2. Memory phase A. First cycle
                => val1 = undefined , initially all spaces for vars kept undefined
                => val2 = indefined
                => addNums = definition of the function
                => result1 = undefined
                => result2 = undefined
                B.Exe phase
                => val1 = 5
                => val2 = 10
                => addNums => new Exe context // every time a function is called both phases are done again
                            A. mem phase
                            => val1 =undefined;
                            => val2 = undefined
                            => total = undefined
                            B. EC
                            => num1 = 5;
                            => num2 = 10
                            => total = 15 , this goes to return (global context), after every call this functional context get deleted
                => result1 = 15
                => again in addNums both phases with new parameters
                => result2 = 12*/