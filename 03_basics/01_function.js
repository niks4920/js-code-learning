function addTwoNumber(number1, number2){
    console.log(number1 + number2)
}

addTwoNumber()   // o/p NaN as no argument was given
addTwoNumber(3,2)
addTwoNumber(3,"2")
addTwoNumber(3,null)
addTwoNumber("2",3)

const result = addTwoNumber(4,4)
console.log("Result: ",result)    //o/p is undefined as we are not returning anything from function

// function with return
function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    // return result
    return number1+number2
    console.log("Niketa")  // this code will never execute as it is after return
}

const results = addTwoNumbers(4,4)
console.log("Result: ",results)

function loginUserMessage(username) {
    return `${username} just logged in`
}
console.log(loginUserMessage("Niketa"))

console.log(loginUserMessage())  //o/p - undefined just logged in

// to resolve above issue
function loginUserMessage2(username) {
    if(username === undefined) { 
    // or we can write like this if(!username) as undefined is considered as false
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2())

// if we want to give default value if user didn't pass anything
function loginUserMessage3(username = "Default") {
    if(!username) { 
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage3())