let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

//Diff ways of Declaring Date
let myCreatedDate = new Date(2025,0,24)
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())
let myCreatedDate2 = new Date(2025,0,24,5,3)
console.log(myCreatedDate2.toLocaleString())
let myCreatedDate3 = new Date("2025-01-24")
console.log(myCreatedDate3.toLocaleString())
let myCreatedDate4 = new Date("01-24-2025")
console.log(myCreatedDate4.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate4.getTime())  // to get time of particular date
// to convert in seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getMonth()+1)
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))
