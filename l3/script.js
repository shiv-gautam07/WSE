// // TASK1:-
// let cart = {
//     "shoes": 2100,
//     "shirt": 2500,
//     "wallets": 300
// };

// let totalPrice = 0;
// let totalProducts = 0;

// function orderDetails(cart) {
//     totalPrice = 0;
//     totalProducts = Object.keys(cart).length;

//     for (let item in cart) {
//         totalPrice += cart[item];
//     }

//     console.log("Order Details calculated.");
//     console.log("Total number of Products:", totalProducts);
    
//     setTimeout(orderSummary, 2000);
// }

// function orderSummary() {
//     console.log("----- Order Summary -----");
//     console.log("Total Products:", totalProducts);
//     console.log("Total Price: ₹" + totalPrice);
    
//     setTimeout(paymentGateway, 2000);
// }

// function paymentGateway() {
//     console.log("Processing payment...");
    
//     setTimeout(successfulOrder, 3000);
// }

// function successfulOrder() {
//     console.log("Order placed successfully!");
//     console.log("Thank you for shopping with us!");
// }

// orderDetails(cart);


var arr =[2,4,6,8,10,1,3,5,7]

// Map Replica
Array.prototype.mapreplica = function(logic){
    let output = []
    for(var i = 0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

function squares(x){
    return x*x
}

function half(x){
    return x/2;
}
// const myOutput= arr.mapreplica(squares);
// const myOutput2= arr.mapreplica(half);

// console.log(myOutput);
// console.log(myOutput2);


// Filter Replica

Array.prototype.filterReplica = function(logic){
    let output = [];
    for(let i = 0; i<this.length;i++){
        if(logic(this[i])){
            output.push(this[i]);
        }
    }
    return output;
}

function odd(x){
    if(x%2!=0){
        return x;
    }
}

// console.log(arr);
let myOutput3 = arr.filterReplica(odd);
console.log(myOutput3);



// Reduce Function

const sum = arr.reduce((acc,curr)=>{
    acc = acc+curr
    return acc
},0)

console.log(sum);
// Reduce Replica

Array.prototype.reduceReplica = function(logic, initialValue){
    let acc;
    let start = 0;

    if(initialValue===undefined){
        acc = this[0];
        start = 1;
    }
    else{
        acc = initialValue;
    }
    for(let i = start; i<this.length; i++){
        acc = logic(acc, this[i], i, this);
    }
    return acc;
}

function add(acc,val) {
    return acc+val;
}

const myOutput4 = arr.reduceReplica(add,0);
console.log(myOutput4);