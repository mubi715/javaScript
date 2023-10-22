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

///////////////////////////////////////////
//singleton objects
const newUser=new Object()
newUser.email="mubasher@yahoo.com"
newUser.age=45
// console.log(newUser);
const ourObj={
    name:"maarij",
    personalInfo:{

        address: {

            house:"corangtown"
        }
    }
}
// console.log(ourObj.personalInfo.address.house);
const obj1={ 1:"name ",2:"email"}
const obj2={3:"lastname ",4:"another"}
const obj3=Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2}
// console.log(obj4);
// array of objects//
const userData =[
    {id:1
    email:"hisan@gmail.com"},
    {id:1
        email:"hisan@gmail.com"},
]

    




