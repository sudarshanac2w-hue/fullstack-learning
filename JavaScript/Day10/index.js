//execution Context
//memory allocation
//a=undefined
//b=undefined
//addNumber=functioncode
//sumResult1=undefined
//sumResult2=undefined

//Execution phase

// console.log(a);//undefined
// var a=10;
// var b=20;
// console.log(a);//10

// var sumResult1=addNumber(a,b);
// console.log(sumResult1)

// function addNumber(num1,num2){
//     var sum=num1+num2;
//     return sum;
//  }
// // var sumResult1=addNumber(a,b);
// var sumResult2=addNumber(4,5);
// // console.log(sumResult1,sumResult2);
// console.log(sumResult2);

 

//let const-madhe jevha variable la declare karu tevhach acess karata  yeta
//memory allocation
// a=<uninitialized> [temorary dead zone]-joparyNumverant actula data tyat jat nahi toparyant access nahi karu shakt 
//addNumber=<uninitialized>
//result=<uninitialized>

//execution pahse
// a=10 
//b=20
//addNumber=function code
//result=30

// console.log(a);
let a=10;
const b=20;
 

 const result=addNumber(a,b);
 console.log(result);

const addNumber=function(num1,num2){
    const sum=num1+num2;
    return sum;
}
 console.log(a,b);
//  const result=addNumber(a,b);
//  console.log(result);