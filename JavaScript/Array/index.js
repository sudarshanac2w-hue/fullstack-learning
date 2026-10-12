//Array
let marks=[100,50,70,80,90];
console.log(marks);

let arr=[100,30,"sudha",true];
console.log(arr);
console.log(typeof arr);
// push:insert element at end
arr.push(90);
arr.push("sanu");
console.log(arr);

//pop:delete element from end
arr.pop();
console.log(arr);

//frisst add:unshift()
arr.unshift(10);
arr.unshift(50);

//delete first

arr.shift();
console.log(arr);

let arr1=[10,20,30,40];

for(let i=0;i<arr1.length;i++){
    console.log(arr[i]);

}

//for of loop
for(let num of arr1){
    console.log(num);
}

//
// const arr5=[10,20,30,40,66];
// const arr6=arr5.slice(2,4);
// console.log(arr5);

//trim out the part of array
// const arr7=arr5.splice(1,3,"sudha",17);
// console.log(arr5);

// const arr2=[10,20,30,40,22];
// const arr3=["sudha",11,]

//concate multiple array using push add array into existiong array

 const arr2=[10,20,30,40,22];
 const arr3=["sudha",11, true];
 const arr4=[90,2,false];
//  arr2.push(arr3);
//concate-return new array 
// const arr5=arr2.concat(arr3,arr4);
//  console.log(arr5);

//merging array with spread operator

const arr6=[...arr2,...arr3,...arr4];
console.log(arr6);

const names=["sudha","sanu","bhumi" ,"ashita"];

console.log(names.toString());

console.log(names.join());
console.log(names.indexOf("sudha"));
console.log(names.lastIndexOf("sanu"));
// names.sort();
names.reverse();
console.log(names);

// const a=[101,90,80,32,92]
//ascending order
// a.sort((a,b)=> a-b);
// console.log(a);

//descending order
// a.sort((a,b)=> b-a); 
// console.log(a);

const a=[101,90,80,32,92 ,[20,30,40,[20,40,60],90],60]
const d=a.flat(Infinity);
console.log(d);






