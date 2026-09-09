let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
  const randidx =   Math.floor(Math.random()*3);
    return options [randidx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice, compchoice) => {
    if(userWin) {
     userScore++;
      userScorePara.innerText = userScore;  
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
          compScore++;
      compScorePara.innerText = compScore;  
        msg.innerText = `You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice) => {
     // generate computer choice
     const  compchoice = genCompChoice();

     if(userchoice === compchoice){
     //draw game
     drawGame();
     } else {
        let userWin = true;
        if (userchoice === "rock") {
            // scissors paper 
          userWin = compchoice === "paper" ? false : true;
        }  else if (userchoice === "paper") {
            // scissors rock
          userWin = compchoice === "scissors" ? false : true;
        } else {
            //rock , scissors
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
     }
};


choices.forEach ((choice) => {
    // console.log(choice);
    choice.addEventListener("click", ()=>{
    const userchoice = choice.getAttribute("id"); 
    // console.log ("choices was clicked",userchoice);
    playgame(userchoice);
    });
});
