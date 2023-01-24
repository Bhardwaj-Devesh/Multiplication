//we want random number for the calculations so we are using random function
const num1= Math.ceil(Math.random()*10);
// Math.random() function gives the value between 0-1 
// in order to get the value from 1 to 10 we ahve to multiply by 10
//In order to get the integer value we can use another function  Math.ceil
const num2=Math.ceil(Math.random()*10);
// Now we want to edit the question so for this we have to use
const formel=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreel=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreel.innerText=`score: ${score}`;
const questionEl=document.getElementById("question");
questionEl.innerText=`What is ${num1} multiply by ${num2}?`
const correctAns=num1*num2;

formel.addEventListener("submit",()=>{
    const userAns= +inputEl.value
    if(userAns===correctAns){
        score++;
        Updatelocalstorage();
    }else{
        score--;
        Updatelocalstorage();
    }
})
function Updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
// why we are not updating the value of score because it is not store anywhere 
//and function call itself again
// and it again ge back to zero 
// so there is a need to store the value of score in local browser storage
// (document in which you want to change).addEventListener("event",function,capture)