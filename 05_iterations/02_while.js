//while loop

let index= 1
while (index<=10) {
    console.log(`Value of index is ${index}`);
    index = index +2    
}

let myArray = ["audi","benz","honda"]
let i = 0
while(i<myArray.length){
    console.log(`Value is ${myArray[i]}`); 
    i++  
}

// do-while loop

let score = 10
do{
    console.log(`Score is ${score}`);
    score --    
} while(score >= 1)

// condition is false
let score2 = 0
do{
    console.log(`New Score is ${score}`);
    score --    
} while(score >= 1)
