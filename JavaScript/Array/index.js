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
    console.log(ar[i]);

}

//for of loop
for(let num of arr1){
    console.log(num);
}
