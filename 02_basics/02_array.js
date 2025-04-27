const marvel_heros = ["Thor","Spiderman","Ironman"]
const dc_heros = ["Superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros); // array inside array
//console.log(marvel_heros[3][1])  // to get element of inner array

//const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros)  //return new array with all elements

const all_new_heros = [...marvel_heros,...dc_heros]  //spread
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Niketa"))  // to check whether particular thing is array or not
console.log(Array.from("Niketa")) // to convert particular thing to array
console.log(Array.from({name: "Niketa"}))  //interesting case as it will return empty array as we need to tell whether we want array of key or array of values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))  //new array from set of elements