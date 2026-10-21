const parent=document.getElementById("parent");

parent.addEventListener("click",(e)=>{
    const child=e.target;      // e.target mul parent cha object bhetla 
    const body=document.querySelector("body");
    body.style.backgroundColor=child.id;
});
