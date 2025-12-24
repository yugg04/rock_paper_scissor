let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");

const genComputerchoice = () => {
    const options = ["rock","paper","scisoors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw..Play again..";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = "You win!!";
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorepara.innerText = computerScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    const compChoice = genComputerchoice();

    if(userChoice === compChoice){
        //drawgame
     drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
             //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            //rock,scissors
             userWin = compChoice === "scissor" ? true:false;
        }else{
            //rock,paper
           userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
    
};

choices.forEach((choice)=>
{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
       // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})