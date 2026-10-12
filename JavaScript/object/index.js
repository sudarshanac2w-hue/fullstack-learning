//object
//key-value pair
// const user={
//     name:"sudha",
//     age:21,
//     emailId:"sudah@gmail.com",
//     account:3400
// }

//crud operation :create read upadate delete

// console.log(user.age);//read

// user.adhar=1234;//add



//delete
// delete user.emailId;
// console.log(user);
// const user2=user;
// user2.age=22;
// console.log(user);

//how to access user key
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys,user[keys]);
// }//not recomended

//recommended format
// const temparr=Object.keys(user);
// for(let keys of temparr){
//     console.log(keys);
// }
// const temparr=Object.values(user);
// for(let keys of temparr){
//     console.log(keys);
// }
// const temparr=Object.entries(user);
// for(let values of temparr){
//     console.log(values);
// }
// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }
// const user={
//     name:"sudha",
//     age:21,
//     emailId:"sudah@gmail.com",
//     account:3400,
//     greeting:function() {
//         console.log("hello $(this.name)");
//         return 10;
        
//     }
// }
// const c=user.greeting();
// console.log(c);

//nested object
const user={
    name:"sudha",
    age:21,
     emailId:"sudah@gmail.com",
    account:3400,
    address:{
        city:"pune",
        state:"maharashtra"
    }
 }

 //shallow copy
//  const user2={...user};
//  user2.name="sanu"
//  console.log(user.address.city);

// console.log(user);
// console.log(user2);

//deep copy

const user2=structuredClone(user);

 user2.name="sanu";
 user2.address.city="nashik"
 console.log(user);
 console.log(user2);


