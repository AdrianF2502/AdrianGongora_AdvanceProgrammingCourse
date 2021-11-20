
//console.log(addAllNumbers(2,4,1,5,123,43,65));

function addTwoNumbers(parametr1, parametr2) { // Expression function!
    return parametr1 + parametr2;
};

const addAllNumbers = function (){ // Por sentencia
    const numbers = [...arguments];
    const add = numbers.reduce( function (acc, currentValue, currentIndex, array) {
        return acc = acc + currentValue;
    }, acc = {add: 0});
    return add;
};
console.log(addAllNumbers(1,2,3));

// Arrow function //

function getName(firstname, lastname){
    return `${firstname} ${lastname}`;
}

function sayHello( callback, first, last){
    console.log(`HELLO ${callback(first, last)}`);
}

sayHello( getName, "Adrian", "Felipe");

// ARROW FUNCTION
const arrowFunction = (parametro1) => {

    return parametro1*2

   }
console.log(arrowFunction(2));

// ARROW FUNCTION solo con un dato
const arrowFunction2 = arg1 => arg1*2;
console.log(arrowFunction2(2));
