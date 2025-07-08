
/*
const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => resolve('A resolved'), 500);
});
promiseA.then(result => console.log('Basic Promise:', result));

// Promise.all() example
// Waits for all promises to resolve; rejects if any fail
const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => resolve('B resolved'), 300);
});
const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => resolve('C resolved'), 700);
});
const promiseD = new Promise((resolve, reject) => {
  setTimeout(() => resolve('D resolved'), 200);
});
Promise.all([promiseB, promiseC, promiseD])
  .then(results => console.log('All succeeded:', results))
  .catch(error => console.error('One failed:', error));

// Promise.race() example
// Resolves/rejects as soon as the first promise settles (any outcome)
const promiseE = new Promise((resolve, reject) => {
  setTimeout(() => reject('E rejected'), 400);
});
const promiseF = new Promise((resolve, reject) => {
  setTimeout(() => resolve('F resolved'), 600);
});
const promiseG = new Promise((resolve, reject) => {
  setTimeout(() => resolve('G resolved'), 800);
});
Promise.race([promiseE, promiseF, promiseG])
  .then(result => console.log('Race winner:', result))
  .catch(error => console.error('Race error:', error));

// Promise.allSettled() example
// Waits for all promises to finish; gives status/result for each (never rejects)
const promiseH = new Promise((resolve, reject) => {
  setTimeout(() => resolve('H resolved'), 200);
});
const promiseI = new Promise((resolve, reject) => {
  setTimeout(() => reject('I rejected'), 500);
});
const promiseJ = new Promise((resolve, reject) => {
  setTimeout(() => resolve('J resolved'), 300);
});
Promise.allSettled([promiseH, promiseI, promiseJ])
  .then(results => {
    console.log('All settled results:', results.map(r => r.status));
  });

// Promise.any() example
// Resolves as soon as any promise resolves; rejects only if all fail
const promiseK = new Promise((resolve, reject) => {
  setTimeout(() => reject('K rejected'), 200);
});
const promiseL = new Promise((resolve, reject) => {
  setTimeout(() => resolve('L resolved'), 400);
});
const promiseM = new Promise((resolve, reject) => {
  setTimeout(() => reject('M rejected'), 300);
});
Promise.any([promiseK, promiseL, promiseM])
  .then(result => console.log('First success:', result))
  .catch(errors => console.error('All failed:', errors));

  */

async function getData(){
    try{
        const response = await fetch('https://dummyjson.com/products')
        if(!response.ok) throw new Error('Cannot fetch Products');
        const data = await response.json();
        const list = document.getElementById("products");
        list.innerHTML = ""
        data.products.forEach(product => {
            const li = document.createElement("li");
          li.textContent = `${product.title} - Rs${product.price}- ${product.category} - ${product.rating}`;
          list.appendChild(li);
        });
    }
    catch(error){
        console.log("Error: ", error.message)
    }
}

getData();