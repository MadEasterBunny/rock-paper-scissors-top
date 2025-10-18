let humanScore = 0;
let computerScore = 0;


const getRandomNum = num =>{
    return Math.floor(Math.random() * num);
}

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const choiceInx = getRandomNum(choices.length);
    return choices[choiceInx];
}

const getHumanChoice = () => {
    const choice = prompt("Enter either rock, paper or scissors", "");
    return choice.toLowerCase();
}

const playRound = (humanChoice, computerChoice) => {
    if(
        humanChoice === "rock" && computerChoice === "scissors"||
        humanChoice === "paper" && computerChoice === "rock"||
        humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Player wins!");
        humanScore ++;
    } else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        computerScore++;
        if(computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
        } else {
            console.log("You lose! Scissors beats Paper");
        }
    } else {
        console.log("It's a tie!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection), humanSelection, computerSelection, humanScore, computerScore);