// for in loop

// on object
const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby"
}

for (const key in myObject) {
        console.log(key)    // it will give all keys of object
        console.log(myObject[key]) // to find value from key of object
}


// on array
const programming = ["js","cpp","java"]

for (const key in programming) {
    console.log(key)      // it will give index of array
    console.log(programming[key])   //it will give value of array  
    }

// on map  - it won't work here
const myMap = new Map()
myMap.set('IN',"India")
myMap.set('USA',"United States of America")
myMap.set('FR',"France")

for (const key in myMap) {
    console.log(key)    // won't do anything as map is not iterable like this
}
