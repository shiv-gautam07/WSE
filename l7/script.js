// Event-Capturing:-
// const grandfather = document.getElementById('grandfather');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');


// grandfather.addEventListener('click',(e)=>{
//     console.log("Grandfather Clicked!!!!");
//     e.stopPropagation(); 
// })

// parent.addEventListener('click',(e)=>{
    
//         console.log("Parent Clicked!!!!");
//         e.stopPropagation();
// })

// child.addEventListener('click',(e)=>{
//     console.log("Child Clicked!!!!");
//     e.stopPropagation();
// })



// const productList = document.getElementById("productList");

// productList.addEventListener("click",(e)=>{
//     if(e.target.tagName === "LI"){
//         const product = e.target.textContent
//        console.log("You clicked on: ", product);
//     }
// })


// const newElement = document.createElement("li");
// newElement.textContent = "Ties";
// productList.appendChild(newElement);

const textBox = document.getElementById("textBox");
function debounce(){
    let search;  // not optimal to use global variable, due to lack of encapsulation
    textBox.addEventListener("input",(e)=>{
    clearTimeout(search); // Clear the previous timeout
    search = setTimeout(()=>{
        const inputText = e.target.value;
        console.log("Input changed to: ", inputText);
    },2000)
    // console.log(search);
})
}

debounce();


