const student = {
        name: undefined,
        age: undefined,
        greetings: function(message){
                console.log(`this is equal: ${JSON.stringify(this)}`);
                console.log(`${message} soy ${this.name} y tengo ${this.age}`);
        },
};

const Carlos = Object.create(student);
Carlos.name = "Carlos Jose, alias el cacas";
Carlos.age = 23;
Carlos.greetings("Hola banda");

const Cesar = Object.create(student);
Cesar.name = "Julius Cesar";
Cesar.age = 32;
Cesar.greetings("jaja xd");
Cesar.programming = function (problem){
        //Logic and Computing
        console.log("Programing solution for", problem);
};
Cesar.programming("Create an amazing web application")
student.greetings("Hola Mundooo");