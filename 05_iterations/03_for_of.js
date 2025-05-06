// for of
// on Array
const arr = [1,2,3,4,5]
for (const element of arr) {
    console.log(element);   
}
// on string
const greetings = "Good Morning"
for (const greet of greetings) {
    console.log(greet)
}

// on Maps
const myMap = new Map()
myMap.set('IN',"India")
myMap.set('USA',"United States of America")
myMap.set('FR',"France")

for (const element of myMap) {
    console.log(element)    // it will give array of key and values together
}

// in order to print key and value of map separately use below syntax
for (const [key,value] of myMap) {
    console.log(`Value is ${value} for key ${key}`)
}

// on object  - won't work as object is not iterable
const myObject = {
    game1: "NFS",
    game2: "Mario"
}

for (const element of myObject) {
 //   console.log(element)
}