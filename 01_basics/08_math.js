console.log(Math)   // o/p - Object [Math] {}
console.log(Math.abs(-5)) // change -ve to +ve
console.log(Math.round(4.3))  // provide round off value - 4
console.log(Math.ceil(4.2))   // provide max round off value - 5
console.log(Math.floor(4.2))  // provide min round off value - 4
console.log(Math.min(4,3,5,8)) // return min value
console.log(Math.random())    // return random value b/w 0 to 1
console.log(Math.random()*10)  
console.log((Math.random()*10)+1)  // to avoid 0 value
console.log(Math.floor(Math.random()*10)+1)  // to avoid decimal value

// to get random value between any particular min and max value
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)