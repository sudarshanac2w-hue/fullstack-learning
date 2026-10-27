console .log("hello world start");





const p1=fetch("https://api.github.com/users");//pending sate madhe data get nahi karu shakat

//fullfield,reject
p1.then((response)=>{
    console.log(response);
})




console.log("hello world end");