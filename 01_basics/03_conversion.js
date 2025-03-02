let score = "33abc"
let score2 = null
let score3 = undefined
console.table([typeof score,typeof score2,typeof score3])
let valueInNumber = Number(score)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
console.table([typeof (valueInNumber),typeof (valueInNumber2),typeof (valueInNumber3)])
console.table([valueInNumber,valueInNumber2,valueInNumber3])

//Number conversion
//"33"      => 33
//"33abc"   => NaN
//true      => 1
//false     => 0
//null      => 0
//undefined => NaN

let isLoggedIn = 1
//let isLoggedIn = ""
//let isLoggedIn = "Niketa"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

//Boolean conversion
//1        => true
//0        => false
//""       => false
//"Niketa" => true

let someNumber = 32
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)