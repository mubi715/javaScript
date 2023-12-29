const myArr=["mubasher","maarij"]
const myArr1=["zarish","maryam"]
// myArr.push(myArr1)
// console.log(myArr[2][1]);
const newArr=[...myArr,...myArr1]
// console.log(newArr);
const anotherArray=[1,2,[3,4,5],6,[7,[8,9]]]
// const realArr=anotherArray.flat(Infinity)
// console.log(realArr);

// console.log(Array.isArray("Mubasher"));
// console.log(Array.from("Mubasher"));
console.log(Array.from({name:"Mubasher"}));  //interesting

let used1=100
let used2=200
let used3=300
console.log(Array.of(used1,used2,used3))// difference b/w of ,from,isArray

// hellow mubasher