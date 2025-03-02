//primitive
//7 types: String,Number,Boolean,null,undefined,symbol,BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
const bigNumber = 3973746573648537n
//reference (non primitive)
//Array, Objects, Functions
const heros = ["superman","batman"]
let myObj = {
    name: "John",
    age: 24
}
const myFunction = function(){
    console.log("Hello World")
}

// to find datatype of any variable
console.table([typeof score,typeof scoreValue,typeof isLoggedIn,typeof outsideTemp,typeof id,typeof userEmail,typeof bigNumber,typeof heros,typeof myObj,typeof myFunction])