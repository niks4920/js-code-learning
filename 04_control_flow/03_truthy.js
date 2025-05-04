const userEmail = "n@niketa.ai"

if(userEmail){ 
    console.log("Got useremail")
} else {
    console.log("Don't have user email")
}

//falsy values : false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//Truthy values: "0", " ","false",[],{},function(){}

// way to check empty array
const userEmail1 = []
if(userEmail1.length === 0) {
    console.log("Array is empty")
}
//way to check empty object
const userEmail2 = {}
if(Object.keys(userEmail2).length === 0) {
    console.log("Object is empty")
}
