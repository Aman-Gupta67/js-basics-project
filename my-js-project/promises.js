const cart = ['Jeans','Shirt'];
const promise = createOrder(cart);

//comment

promise.then(function(orderID){
    console.log(orderID);
    return orderID;
})//process chainning
.then (function(orderID){
    return proceedToPayment(orderID);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    return paymentInfo;
})
.catch(function(err){
    console.log(err.message)
});

//creating createOrder
function createOrder(cart) {

//creating a promises for createOrder
const p1 = new Promise(function(resolve,reject){
    const orderID= 1234;
    console.log('waiting for 5 sec');
    if(typeof orderID != 'number'){
        const err = new Error("No Order ID generated");
        reject(err);
    }
    
    setTimeout(function(){
        resolve(orderID);
    },5000);

});
return p1;
}

function proceedToPayment(orderID){

    return new Promise(function(resolve,reject){
resolve('Payment Successful');
    });
}