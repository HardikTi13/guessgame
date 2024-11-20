let cnum = Math.floor(Math.random()*100) + 1;
let attempt = 0; 
let attemptData = document.getElementById("attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");
function check(){
    let usernum = parseInt(userinp.value);
    if(cnum == usernum){
        message.innerHTML="Congratulations! You have guessed the number.";
        message.style.color="green";
        resBtn.style.display="block";
    }
    else if(usernum-cnum < 100 && usernum-cnum > 0 ){
        message.innerHTML="little High! Try Again";
        message.style.color="white";
    }
    else if(usernum-cnum>=100){
        message.innerHTML="Too High !Try Again";
        message.style.color="white";
    }
    else if(cnum-usernum >=100){
        message.innerHTML="Too Low !Try Again";
        message.style.color="white";    
    }
    else if(cnum-usernum<100){
        message.innerHTML="Little Low !Try Again";
        message.style.color="white";    
    }
    attempt++;
    attemptData.innerHTML=attempt;
    setTimeout(() =>{
        userinp.value=0;
        message.innerHTML="";
    }, 1000);
}
function restart(){
    cnum = Math.floor(Math.random()*100) + 1;
    attempt = 0; 
}
subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);