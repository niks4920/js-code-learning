// for

for (let i = 0; i <= 10 ; i++) {
    const element = i
    if(element==5){
        console.log("5 is best number");       
    }
    console.log(element);   
}

//Nested for
for (let i = 0; i <=10; i++) {
    console.log(`Outer loop is: ${i}`);   
    for(let j = 0; j <=10; j++) {
        console.log(`Inner Loop is ${j} and outer loop is ${i}`)
    }    
}

for (let i = 1; i <=10; i++) {
    console.log(`Table of: ${i}`);   
    for(let j = 1; j <=10; j++) {
        console.log(`${i} x ${j} = ${j*i}`)
    }    
}

// for loop on array
const myArray = ["flash","superman","batman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
    
}

// break and continue keyword

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        break
    }
    console.log(`Value of index is ${index}`);   
}

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue
    }
    console.log(`Value of index is ${index}`);   
}