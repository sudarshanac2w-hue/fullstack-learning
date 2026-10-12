//forEach,filter,reducer,map,set

//1)forEach loop------------------------

// const arr=[10,20,30,87,90]
//   let sum=0;
// arr.forEach((number)=>{

//      sum+=number;
//     // console.log(number);

// })
// console.log(sum);

//2)filter--------------------------------


// const newArr=arr.filter((number)=>number>25);
// console.log(newArr);
//this=const arr=[10,20,30,40,50,60];
// const arr=[10,20,30,40,50,60];
// arr.filtering=function(compare){
//     const ans=[];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;

// }

//  const newArr=filtering((num)=>num>25);
// console.dog(newArr)
//

//Map------------------------------------

// const arr=[10,20,30,40,50,60];
// const newArr=arr.map((num)=>num*3);
// console.log(newArr);


//Data structure:Set------------------------
// const arr=[10,20,30,40,50,60,10,30,40];
// //console.log(arr);

// const s1=new Set(arr);
// s1.add(11);
//  console.log(s1);
// console.log(s1.has(20));
// console.log(s1.delete(10));
// s1.clear()

// console.log(s1.size);

// map------------------
const m1=new Map(
    [
        ["rohit",40],
        [2,"rohit"],
        [true,11],
        [[10,20,30],"mohit"]

        
    ]
);
m1.set({name:"manish",age:20},false)
// console.log(m1);
console.log(m1.get("rohit"));

for(let [keys,value] of m1){
    console.log(keys,value);
}