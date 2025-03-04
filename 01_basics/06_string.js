const name = "John"
const repoCount = 50
console.log(name + repoCount + " Value")  //outdated

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String("Johnson-new")
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))
console.log(gameName.toUpperCase())
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-7,7)
console.log(anotherString)
const newStringOne = "    Niketa    "
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20%chodhary"

console.log(url.replace('%20%','-'))
console.log(url.includes('hitesh'))

console.log(gameName.split('-'))