// Adrian Gongora
// First Exercise - Typecasting testing.

// Dummy variables
var num = '24';
var num2 = 321
var num3 = 3.14
var num4 = '23.54 23.23 22.98';
var word = 'Adrian';
var word2 = 'z'

//Typecasting

console.log(typeof Number(word)); // turns variables into numbers // the NaN is for not a number
console.log(typeof Boolean(word2)); // turn a variable into a boolean value (true or false)
console.log(typeof String(num2)); // turns a variable into a string

console.log(num2.toString()); // Turns numbers into strings
console.log(parseInt(num4)); //  returns the first natural or integer number in a string
console.log(parseFloat(num4)); // returns a the first real or float number in a string

//Falsy Values
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));

//True Values
console.log(Boolean("Adrian"));
console.log(Boolean(5));
console.log(Boolean({key:"5"}));
console.log(Boolean( [] ));

console.log(typeof null);

console.log(Number("5x") );

console.log(Number.parseInt(num2));
console.log(Number.parseFloat(num3));

var result = "hola" + "mundo";
var resultNumbersStringAdd = 2 + "22";
var resultNumbersStringReminder = 2 - "22";
console.log(resultNumbersStringAdd);
console.log(resultNumbersStringReminder);