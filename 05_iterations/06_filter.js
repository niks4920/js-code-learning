const coding = ["JS","Ruby","Java","Python"]

const values = coding.forEach( (item) => {
          console.log(item)
          return item
}   
 )
console.log(values)  // output is undefined as forEach doesn't return anything
// To resolve above issue we will use other function/method

const myNums = [1,2,3,4,5,6,7,8,9,10]
const myNewNums = myNums.filter( (num) => num > 4 )
console.log(myNewNums)

// if need to do same thing using forEach
const newNums = []
myNums.forEach ( (num) => {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)

// other examples of filter
const books = [
    {title: "Book1", genre:"Fiction",publish:1981},
    {title: "Book2", genre:"Non-Fiction",publish:1992},
    {title: "Book3", genre:"History",publish:1999},
    {title: "Book4", genre:"Non-Fiction",publish:1989},
    {title: "Book5", genre:"Science",publish:2009},
    {title: "Book6", genre:"Fiction",publish:1987}
]

const userBooks = books.filter((bk) => bk.genre === "Fiction")
console.log(userBooks)

let userBooks2 = books.filter((bk) => bk.publish >= 1989)
console.log(userBooks2)

userBooks2 = books.filter((bk) => bk.publish >= 1989 && bk.genre === "Non-Fiction")
console.log(userBooks2)
