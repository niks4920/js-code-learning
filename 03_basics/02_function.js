//shopping cart where we don't know no of argument that will be passed
//use rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,600)) // output will be a array of all passed argument

//other case
function calculateCartPrice2(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200,400,500,600)) // val1 will have 200, val2 will have 400 and rest will go under ...num

//function with objects
const user = {
    username: "Niketa",
    price: 199
}
function handleObject(anyobject){
    console.log(`user is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
// handleObject({username:"Sam",price:200}) - other way where no need to create object seperately

//function with array
const myNewArray = [200,300,500,600]
function handleArray(getArray) {
    return getArray[1]
}
console.log(handleArray(myNewArray))
console.log(handleArray([200,300,500,600])) // way in which we don't need to declare array separately