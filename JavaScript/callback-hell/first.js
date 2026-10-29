// zomato application

// const orderDetail = {
//     orderId: 123123,
//     food:["Pizza","biryani","coke"],
//     cost: 620,
//     customer_name: "Rohit",
//     customer_location: "Dwarka",
//     restaurant_location: "Delhi"
// }

// function placedOrder(orderDetail , Callback){
//     console.log(`${orderDetail.cost} Payment is in progress`);

//     setTimeout(()=>{
//       console.log("Payment is received and order get placed");
//       orderDetail.status = true;
//       Callback(orderDetail);
//     },3000)
// }



// function preparingOrder(orderDetail,Callback){
//     console.log(`Your food preparation started of ${orderDetail.food}`);

//     setTimeout(()=>{
//         console.log("Your order is now prepared");
//         orderDetail.token = 123;
//         Callback(orderDetail)
//     },3000);
// }


// function pickupOrder(orderDetail ,Callback){
//     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);

//     setTimeout(()=>{
//         console.log("I have picked up the order");
//         orderDetail.received = true;
//         Callback(orderDetail);
//     },3000);
// }


// function deliverOrder(orderDetail){
//     console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

//     setTimeout(()=>{
//         console.log("Order delivered succesfully");
//         orderDetail.delivery = true;
//     },3000)
// }






// placedOrder(orderDetail, (orderDetail)=>{
//     preparingOrder(orderDetail ,(orderDetail)=>{
//         pickupOrder(orderDetail, (orderDetail)=>{
//             deliverOrder(orderDetail);
//         });
//     });
// });

//callback problem solve using Promises

const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail ){
    console.log(`${orderDetail.cost} Payment is in progress`);

     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.1){
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
      resolve(orderDetail);
            }
            else{
                reject("payment is failed");
            }
      
    },3000)
    });
}



function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.05){
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
        }
        else{
            reject("restaurant is close")
        }
    
    },3000);
    })
}


function pickupOrder(orderDetail ){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);

     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            if(Math.random()>0.05){
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
            }
            else{
                reject("unable to reach restaurant")
            }
        
    },3000);

     })
       

}



function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("deliver");
        orderDetail.received = true;
        resolve(orderDetail);
        
    },3000);
    })
} 
placedOrder(orderDetail)
.then((orderDetail)=> preparingOrder(orderDetail))
.then((orderDetail)=> pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error:",error);
}).
finally(()=>{
    console.log("i an doing cleanup")
})




