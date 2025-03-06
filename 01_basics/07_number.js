const score = 100
console.log(score)  // o/p- 100

const balance = new Number(100)
console.log(balance) // o/p - [Number: 100]

console.log(balance.toString())  // o/p - 100 but of type string
console.log(balance.toFixed(2))  // 0/p - 100.00

const otherNumber = 23.46
console.log(otherNumber.toPrecision(3))  // o/p - 23.5
const otherNumber2 = 123.46
console.log(otherNumber2.toPrecision(3))  // o/p - 123
const otherNumber3 = 1123.46
console.log(otherNumber3.toPrecision(3))  // o/p - 1.23e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString())  // o/p - us standard - 1,000,000
console.log(hundreds.toLocaleString('en-IN')) // o/p - 10,00,000
