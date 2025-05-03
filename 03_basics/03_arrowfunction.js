// this refer to current context

const user = {
    username: "niketa",
    price: 999,
    website: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.website()
user.username = "Sammy"
user.website()
console.log(this)     // current context of node env. is empty object {}

// but if we have written console.log(this) in console of browser it will return Window as it is global object of browser

function chai(){
    console.log(this)
}
chai()

function chai1() {
    let username = "Niketa"
    console.log(this.username)  // it will return undefined as we can't access username using this keyword inside function
}
chai1()   

// arrow function

const arrowfunction = () => {
    let username = "Nikea"
    console.log(this.username)  // undefined as we can't access username using this keyword in function
}
arrowfunction()

//Basic Arrow function
const addTwo = (num1,num2) => {
    console.log(num1+num2)
}
addTwo(3,5)

//Implicit return - no need to given return keyword

// const addThree = (num1,num2,num3) => num1+num2+num3 or
const addThree = (num1,num2,num3) => (num1+num2+num3)

console.log(addThree(1,2,3))

// return object using implicit return way - we need to use parenthesis
const objectReturn = () => {username: "Niketa"}
console.log(objectReturn())    // undefined output

const objectReturn2 = () => ({username: "Niketa"})
console.log(objectReturn2())