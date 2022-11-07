const n1 = Math.ceil(Math.random()*10);
const n2 = Math.ceil(Math.random()*10);
const questEL = document.getElementById("question");
questEL.innerText = `What is ${n1} multiply by ${n2}?`;
const correctAns = n1 * n2; 
const scoreEl= document.getElementById("score");
let score =JSON.parse(localStorage.getItem("score"));//didnt got
// if(!score){
//     score = 0;
// }
scoreEl.innerText = `Score: ${score}`
const formEl = document.getElementById("form");
formEl.addEventListener("submit",()=>{
    const userAns = +input.value;
    if(userAns===correctAns){
        score ++;
        updateLocalStorage();
    }
    else{
        score --;
        updateLocalStorage();
    }
})
function updateLocalStorage(){
    localStorage.setItem ("score", JSON.stringify(score))//didn't got

}