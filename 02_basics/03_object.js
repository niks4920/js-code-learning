// declare symbol
const mysym = Symbol('Key1')
//declare Object using literals
const JsUser = {
    name: "Niketa",
    age: 32,
    email: "niks4920@gmail.com",
    isLoggedIn: false,
    lastDayLoggedIn: ['Monday','Sunday'],
    "full name": "Niketa Jain",
    [mysym]: "myKey1"     //take any symbol and use it as key of object
}

//object access
console.log(JsUser.email);
console.log(JsUser["full name"])  //we can't access full name with dot operator
console.log(JsUser[mysym])   //we can't access symbol using dot

//Update objects elements
JsUser.email = "niks4920@github.com"

//add function in object
JsUser.greeting = function() {
    console.log("Hello JsUser")
}
//console.log(JsUser.greeting)   // o/p would be [Function (anonymous)]
JsUser.greeting()

//add new function in object where we want to reference object element
JsUser.greetingTwo = function() {
    console.log(`Hello JsUser, ${this.name}`)
}
JsUser.greetingTwo()

//freeze Object
Object.freeze(JsUser)
JsUser.email = "niks4920@google.com"  // this change won't taken into consideration
console.log(JsUser);

