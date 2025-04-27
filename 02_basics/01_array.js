// Array declaration
const myArray = [0,1,2,3,4,true,"niketa"]
const myArray2 = ["shaktiman","naagraj"]
const myArr = [0,1,2,3,4,5]
console.log(myArr[0])
const myArr2 = new Array(1,2,3)

// Array Methods
myArr.push(7)
console.log(myArr)  // add 1 item at end
myArr.pop()
console.log(myArr)    // remove last item
myArr.unshift(9)
console.log(myArr) // add item at beginning
myArr.shift()
console.log(myArr)    // remove item from beginning

console.log(myArr.includes(9))  //to check whether array has particular element

console.log(myArr.indexOf(4)) //return index of particular element

const newArr = myArr.join()  //copy element and convert in string
console.log(myArr)
console.log(newArr)

// slice and splice

console.log("A ",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("c ",myArr)

//slice won't manipulate original array (second paramater is not included)
//splice will manipulate original array (second paramater is included)