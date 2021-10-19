// Adrian Felipe Gongora Suarez
// Program to create a JSON FILE and read it.

const fs = require("fs");
const chalk = require("chalk");

//const { ServerResponse } = require("http");

var initialSMS = chalk.blue("App running...");

// Object
const User = {

    username: "AdrianF231",
    password: "23gr$6543@3",
    yearofcreation: new Date().getFullYear,
    email: "adriancontacto435@gmail.com",
    typeofUser: "Admin",
    id: 001

};

fs.writeFileSync("./db/myFirstJSON.json", "");
console.log( chalk.green("dataInformation was created succesfully!!"));

try{
    fs.appendFileSync("./db/myFirstJSON.json", JSON.stringify(User));
    console.log(chalk.green("JSON created"));
} catch(error){
    console.log(chalk.red( chalk.red(`Error: ${error}`)));
}
//console.log(chalk.yellow("Algoritmos running..."));

serverResponse = fs.readFileSync("./db/myFirstJSON.json","utf-8");
console.log(serverResponse);