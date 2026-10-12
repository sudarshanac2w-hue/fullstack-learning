// //function
// function addnumber(num1,num2){
//     const sum=num1+num2;
//      console.log(sum);
//     return sum;

// }

//rest opertor
// function addnumber(...num){
  
//     let sum=0;
//     for(let n of num){
//         sum=sum+n;

//     }
   
//    console.log(sum);

// }




// const val=addnumber(3,4);
//  console.log(val);

// addnumber(6,7);
// addnumber(6,7,8)
// addnumber(1,2,4,4);
// addnumber(7,8,12,33,44,);

// const addnumber=function(num1,num2){
//     return num1+num2;
// }
// console.log(addnumber(3,4));

//arrow function
const addnumber=(num1,num2)=>(num1+num2);
    
const a=addnumber(2,3);
console.log(a)

//IIFE function-imediately invoke function
function greeting(){
      console.log("hello");
}
(function greeting(){
    console.log("hello");
})();
//callback function

function greet(){
    console.log("core2web");   
}



function meet(callback){
    console.log("hello");
    callback();
}

meet(greet);
meet(greeting);