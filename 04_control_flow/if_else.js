const temperature = 41

if(temperature === 40 ) {
    console.log("Temp is equal to 40")
}else {
    console.log("Temp is not 40");
}
console.log("Always execute")

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power outside if: ${power}`)  // error will come

// shortend notation - ist scope is in same line
const balance = 1100
if(balance > 1000) console.log("test");

// nested if else

if(balance < 500) {
    console.log("Less than 500");
} else if(balance < 750) {
    console.log("Less than 750");
} else if(balance < 1000) {
    console.log("Less than 1000")
} else {
    console.log("Balance is more than 1000")
}

// multiple conditions checking

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(userloggedIn && debitCard && 2==2) {
    console.log("Allow to buy course")
}
if(loggedInFromGoogle || loggedInFromEmail || 3==2) {
    console.log("User logged in")
}