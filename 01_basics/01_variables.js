const accountId = 1445534
let accountEmail = "niks@abcd.com"
var accountPassword = "12345"
accountCity = "Hathras"   //never use this approach
let accountState          //variable which are not initialize are considered as undefined

//accountId = 2           //Not Allowed due to TypeError: Assignment to constant variable
console.log(accountId);
accountEmail = "abc@abc.com"
accountPassword = "98765"
accountCity = "Noida"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])