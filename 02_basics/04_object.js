//Declaring Object using constructor 
//singleton

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//object inside object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Niketa",
            lastname: "Jain"
        }
    }
}

//to access object inside object
console.log(regularUser.fullname.userfullname.firstname)

//combine objects
const obj1 = {1:"a",
    2: "b"
}
const obj2 = {3:"a",
    4: "b"
}
//const obj3 = {obj1, obj2}   // it will create multiple object in one object

const obj3 = Object.assign({},obj1,obj2)  //it will combine multiple object in 1
console.log(obj3)

const obj4 = {...obj1,...obj2}   //spread operator
console.log(obj4)

console.log(tinderUser);

//Object methods
console.log(Object.keys(tinderUser));  // give all keys of object in array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)) // give array of key and value

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //check whether object has property (key) or not

console.log(tinderUser.hasOwnProperty('123abc'))  //false

//Object destructuring
const course = {
    courseName: "Js in hindi",
    price: 999,
    courseTeacher: "Hitesh"
}
//to access object property using destructuring
const{courseTeacher} = course
const{courseTeacher: teacher} = course
console.log(courseTeacher)
console.log(teacher)
