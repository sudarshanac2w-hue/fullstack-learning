// console .log("hello world start");





// const p1=fetch("https://api.github.com/users");//pending sate madhe data get nahi karu shakat

// //fullfield,reject
// const p2=p1.then((response)=>{
//     return response.json();
// });
// p2.then((response)=>{
//     console.log(response);

// });

//promise chaning
//  fetch("https://api.github.com/users")
//  .then((response)=>{
//     if(!response.ok){
//         throw new Error("data is not present in server")
//     }

//      return response.json();
//  })
//  .then((data)=>{

//     const parent=document.getElementById("first");
//     for(let i=0;i<data.length;i++){
//     const image=document.createElement('img');
//     image.src=data[i].avatar_url;
//     image.style.width="40px";
//     image.style.height="40px"
//     parent.append(image);
//     }


// })
// .catch((error)=>{
//     const parent=document.getElementById("first");
//     parent.textContent=error.message;
// });

const p1=new Promise((resolve,reject)=>{
    resolve("hello");

})
p1.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})
//convert js object to json
// const j1={
//     name:"rohit",
//     age:30,
//     address:"dwarka"
// }
// //convert to json
// const jsonfromat=JSON.stringify(j1);
// console.log(jsonfromat);


//convert json to object
// const jsonfromat=`{
//     "name":"rohit",
//     "age":35,
//     "address":"narhe"
// }`;

// //javacript object
// const jsObject=JSON.parse(jsonfromat);
// console.log(jsObject)