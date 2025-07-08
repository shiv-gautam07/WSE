function welcome(welcomeMessage , goodbyeMessage) {
    console.log(welcomeMessage + " " + this.studentname + " welcome to the class"+ this.studentclass + " " + goodbyeMessage);
}

const student1 = {
    studentname: "shiv",
    studentclass: "CSE",
}
const student2 = {
    studentname: "rk",
    studentclass: "bse"
}

welcome.call(student1 , "goodmorning"); // call method
welcome.call(student2); // call method

console.log("--------------BIND-----------------");
const bindWelcome1 = welcome.bind(student1);
bindWelcome1("Good Afternoon", "Thankyou....");
const bindWelcome2 = welcome.bind(student2);
bindWelcome2("Good Afternoon", "Thankyou....");



function sum(a){
    return function(b){
        return a + b;
    }
}
console.log(sum(5)(10)); 

function chooseBread(bread) {
    return function choosePatty(patty) {
        return function wantCheese(cheese) {
            return `You selected a ${bread} bread with ${patty} patty and cheese: ${cheese}`;
        };
    };
}

console.log(chooseBread("SourDough")("Paneer")("YES"));

const gp = document.getElementById('grandfather');
const p = document.getElementById('parent');
const c = document.getElementById('child');


grandfather.addEventListener('click',()=>{
    console.log("Grandfather Clicked!!!!");
},true)

parent.addEventListener('click',()=>{
    console.log("Parent Clicked!!!!");
},true)

child.addEventListener('click',()=>{
    console.log("Child Clicked!!!!");
},true)
