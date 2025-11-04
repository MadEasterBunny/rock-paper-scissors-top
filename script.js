const body = document.querySelector("body");
const btns = document.querySelector("#btns");
const results = document.querySelector("#results");
const scores = document.querySelector("#scores");

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

const getRandomNum = num =>{
    return Math.floor(Math.random() * num);
}

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const choiceInx = getRandomNum(choices.length);
    return choices[choiceInx];
}

const playRound = (humanChoice, computerChoice) => {
    if(
        humanChoice === "rock" && computerChoice === "scissors"||
        humanChoice === "paper" && computerChoice === "rock"||
        humanChoice === "scissors" && computerChoice === "paper") {
        results.textContent = "Player wins!";
        return humanScore++;
    } else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        if(computerChoice === "rock"){
            results.textContent = "You lose! Rock beats Scissors";
        } else if (computerChoice === "paper") {
            results.textContent = "You lose! Paper beats Rock";
        } else {
            results.textContent = "You lose! Scissors beats Paper";
        }
        return computerScore++;
    } else {
        results.textContent = "It's a tie!";
        return humanScore, computerScore;
    }
}

btns.addEventListener("click", (e) => {
    switch(e.target.id) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
    }

    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    scores.textContent = `Player's Score: ${humanScore} Computer's Score: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5) {
        btns.querySelectorAll("button").forEach(button => {
            button.disabled = true;
        });
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Replay";
        restartBtn.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            humanChoice = "";
            computerChoice = "";    
            results.textContent = "";
            scores.textContent = "";
            btns.querySelectorAll("button").forEach(button => {
                button.disabled = false;
            });
            body.removeChild(restartBtn);
        });
        body.appendChild(restartBtn);

        if(humanScore < 5) {
            results.textContent = "The computer wins!";
        } else {
            results.textContent = "You win!";
        }
    }
});