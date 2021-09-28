var myVar;
let myLet = 15;
const myConst = 69420;

console.log(`myVar: ${myVar}, myLet: ${myLet}, myConst: ${myConst}, hoistedvariable: ${hoistedvariable}`);
// Hoisting

var hoistedvariable = 25; // Only var supports hoisted

// Local Scope!

if(typeof myVar === "undefined") { // Execution Context
        console.log(myVar);
        var myVar = 50;
        console.log(myVar);
};