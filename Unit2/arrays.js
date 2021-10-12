var myArray = [1, 2, 3, 4, 5];
// var myArray2 = new Array{1,2,3};
const ln = myArray.length;
console.log(ln);

// Show Array:

console.log(myArray);

// Iterate Arrays:

for(let i = 0; i<ln; i++)
{
    console.log(myArray[i]);
}

console.log("----------");

for(let index in myArray)
{
    console.log(myArray[index]);
}

console.log("----------");

for(let i of myArray)
{
    console.log(i);
}

// Adding elements
let data = [];
const temp = 27;
data.push(temp);
data.push(12);
data.push(60);
console.log(data);
//Insert at the first element
data.unshift(12);
console.log(data);
// insert multiple data
data.splice(2,0, 3,4);
console.log(data);


// Delete elements
data.pop();
data.shift();
data.splice(1,3,500);
console.log(data);

//Copiar

var friends = ["Luis", "Dios", "Alexis"];
// quiero copiar este array >:)
var bestFriends = friends.slice(1);
bestFriends.shift();

console.log(friends);
console.log(bestFriends);

// Quiero restar dos unidades a todos los items
var edades = [20, 22, 23, 24];
edades = edades.map( function (currentValue, index)
{
    return currentValue - 2;
})
console.log(edades);

/* for( let i = 0; i<edades.length; i++)
{
    edades[i] = edades[i] - 2;
}
 */