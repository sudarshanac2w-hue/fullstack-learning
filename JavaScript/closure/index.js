//Scope and closure, HOF-high order function

//global scope
//functional scope -accesible only to that function
//block level scope-only block

// const a=10;
// const b=20;


// if(true){
//     console.log(a);
// }

// function greet(){
//     let c=30;//functional scope,local scope
//     // console.log(a);//10
//     // console.log(c);

// }
//   console.log(c);// c is not defined 
// greet();

// let global=30;

// function greet(){
//     let global=40;
//     console.log(global);

//     function meet(){
//         console.log(global);//check self scope first,then outer ,then global
//     }
//     meet();
// }

// greet();

//closure example

// function createCounter(){
//     let count=0;
//     function increment(){
//         count++;
//         return count;
//         // console.log("I an increment function");
//        //return 20;
//     }
//     // return incremet();
//     return increment;
// }


//  const counter=createCounter();
//  //console.log(count);//undefined
// console.log(counter());
// console.log(counter());
// console.log(counter());

//clouser example
//   let balance=500;
//   //private
// let user= {

//     deposit:function(amount){
//         if(typeof amount=="number" && amount>0){
//         // console.log(this);
//         balance+=amount;
//         return balance;

//     }

//  },
//   withdraw:function(amount){
//         if(typeof amount=="number" && amount>0 && balance>=amount){
//         // console.log(this);
//         balance+=amount;
//         return balance;

//     }

//  },
//   getBalance:function(){
        
//         return balance;

//     }

//  }

// user.balance="rohit";
// console.log(user.getBalance());

//console.log(user.deposit(200));

// function createBankAccount(){
//      let balance=500;

// const user= {

//     deposit:function(amount){
//         if(typeof amount=="number" && amount>0){
//         // console.log(this);
//         balance+=amount;
//         return balance;

//     }

//  },
//   withdraw:function(amount){
//         if(typeof amount=="number" && amount>0 && balance>=amount){
//         // console.log(this);
//         balance+=amount;
//         return balance;

//     }

//  },
//   getBalance:function(){
        
//         return balance;

//     }

// }
// return user;

// }
// const customer=createBankAccount();
// console.log(customer.withdraw(200))


//HOF-higher order function

function double(value){

    function execute(num){

        //  console.log("hello");
         return num*value;
    }
    return execute;
   
}

const n=double(20);
console.log(n(5));
