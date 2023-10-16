let number= 34
let number1= String(number)
console.log(number1);
console.log(typeof number1);
let x=100
let y=++x
console.log(y);
let name=["ali","mubasher"]
console.log(name);
let object ={
    name:"Maarij",
    age:34

}
console.log(object);

let myfunction = function name(params) {
    console.log("hello world");
    
}
console.log( typeof myfunction);
// stack(premitice) heap(non premeeetive)
let userOne={
    userId:"Zarish",
    email:"email@gmail.com"
    
}
let userTwo=userOne
userOne.email="ali@gmail.com"
console.log(userTwo.email);