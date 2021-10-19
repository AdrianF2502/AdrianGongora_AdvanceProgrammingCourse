const device = {

    sensorModel: "HC04",
    count: 0,
    date: new Date(),
};

console.log(device.date.getFullYear(), typeof device);

const deviceJSON = JSON.stringify(device);
console.log(deviceJSON, typeof deviceJSON);
// Crear un json desde cero en code //

const myJson = '("name": "Luis", "Edad": 25, "friends": ["Diosito", "Angel"], "isMannager": false)';
console.log = (myJson, typeof myJson);

// Manipular formato JSON
// Convertir un JSON a un objecto de JS
const myObj = JSON.parse(myJson)
console.log(myObj.name);