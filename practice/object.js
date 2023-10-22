//singletton   made from constructor
//object.create   
//
///  object made from litterals
const mySym=Symbol("key1")
const myObj={
    name:"Mubasher",
   // [mySym]="mypersonal",
    age : 30,
    location: "Islamabad",
    email:"mubi514@gmail.com",
    lastLoginDays:["monday","saturday"]
}

//console.log(myObj.age);
//console.log(myObj[mySym]);
myObj.age=45
console.log(myObj.age)
//Object.freeze(myObj)
myObj.greeting=function(){
    console.log("hellow world")
}
// console.log(myObj.greeting);
// console.log(myObj.greeting());

// myObj.greetingTwo=function(){
//     console.log(`hellow world,${this.email}`)
// }
// console.log(myObj.greetingTwo());
    




