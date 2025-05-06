// for each  (automatically added as property to array)
// callback function won't have any name
const coding = ["JS","Ruby","Java","Python"]

coding.forEach( function (item) {
          console.log(item)
}   
 );

// using Arrow function 
coding.forEach( (item) => {
    console.log(item)
}   
);

// other way by passing reference of function
function printMe(item) {
    console.log(item)
}
coding.forEach(printMe)

// other parameter for callback function
coding.forEach( (item,index,arr) => {
    console.log(item,index,arr)
})


// Important scenario - Array having objects
const arrayWithObject = [
    {
        langName: "Javascript",
        langFile: "js"
    },
    {
        langName: "Java",
        langFile: "java"
    },
    {
        langName: "Python",
        langFile: "py"
    },
]

arrayWithObject.forEach( (item) => {
           console.log(item.langName)
})