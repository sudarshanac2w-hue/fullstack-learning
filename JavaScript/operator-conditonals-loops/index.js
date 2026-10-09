//operator
//1) Arithmatic operator
// console.log(2+3);
// console.log(4-3);
// console.log(2*3);
// console.log(6/3);
// console.log(2%6);
// console.log(2**3);

//Assignment
// let x=10;
// let y=20;
// x=x*y;
// console.log(x);

//comparison
// let c=10;
// let d=20;
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);
// console.log(x==y);
// console.log(x===y);

//1:null is losely equal to undefined only
console.log(null==undefined);
console.log(null===undefined);
console.log(null==0);
console.log(null==false);

//jevha <,>,>=,<=, asel tar (null converts number,undefined convertes NaN)
console.log(null>=0);
console.log(null<=0);
console.log(null>0);
console.log(null<0);
console.log(null>=undefined);

console.log("sudha">"riya");

console.log(NaN==NaN);//false

//loops
for(let i=0;i<10;i++){
    console.log(i);
}


//while loop
// let i=0;

// while(i<10){
//     console.log(i);
//     i++;
// }

//do while loop
let i=0;
do{
    console.log(i);
    i++;
}while(i<10);

//if else codition
// let age=15;
// if(age>=18){
//     console.log("eligible for voting");
// }else{
//     console.log("not eligible for vote");
// }

let age=78;
if(age<18){
    console.log("kid");
} else if(age>=60){
    console.log("old");
}else{
    console.log(young);
}

//logical operator
//1 &&
console.log(true&&true);
console.log(true&&false);
console.log(false&&false);
console.log(false&&true);

//

// ||

// if the first  value is true ,it will return the first value itself
//if first value is false, it will return second
console.log(true||true);
console.log(true||false);
console.log(false||false);
console.log(false||true);

