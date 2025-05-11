const myNums = [1,2,3]

const myTotal = myNums.reduce(function(accu,curval) {
    console.log(`accumulator: ${accu} and currentValue: ${curval}`)
    return accu+curval
},0)
console.log(myTotal)
//using Arrow function
const myTotal2 = myNums.reduce((accu,curval) => accu+curval,0)
console.log(myTotal2)

// Add price of all item of shopping cart
const shoppingCart = [
    {itemName: "js course", price : 2999},
    {itemName: "java course", price: 499},
    {itemName: "mobile course", price: 5999}
]
const totalPrice = shoppingCart.reduce((accu,item) => accu+item.price,0)
console.log(totalPrice)
