//prototype and classes

// const obj={
//     name:"rohit",
//     age:30,
//     greet:function(){
//         console.log("hello ji");
//     }

// };
// obj.greet();
// console.log(obj.hashOwnProperty("name"));
// console.log(obj.toString());
// const obj2={
//     account:30
// }
// obj2.__proto__=obj;
// // console.log(obj.name);
// console.log(obj.hasOwnProperty("name"))

//class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHi(){
        console.log(`hi ${this.name}`);
    }

 }
 //const person1=new Person("rohit",20);
// const person2=new Person("mohit",10)
// console.log(person2.name);


//banking application example

class Customer extends Person{
    constructor(name,age,account,balance){
        super(name,age);
        this.account=account;
        this.balance=balance;
    }
    checkBalance(){
        return this.balance;
    }
}
const c1=new Customer("mohan",20,12,540);
console.log(c1.name);