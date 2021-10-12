// I want to create a TXT file
const fs = require("fs");
const chalk = require("chalk");

var initialSMS = chalk.blue("App running...");

console.log(initialSMS);

//const jsonInformation = "{''}";

// Crear un archivo en la base de datos local
fs.writeFileSync("./db/dataInformation.json", "Server Information");
console.log( chalk.green("dataInformation was created succesfully!!"));
