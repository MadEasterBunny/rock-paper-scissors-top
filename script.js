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

const playRound = (currentHumanScore, currentComputerScore) => {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if(
        humanChoice === "rock" && computerChoice === "scissors"||
        humanChoice === "paper" && computerChoice === "rock"||
        humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Player wins!");
        return [currentHumanScore + 1, currentComputerScore];
    } else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        if(computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
        } else {
            console.log("You lose! Scissors beats Paper");
        }
        return [currentHumanScore, currentComputerScore + 1];
    } else {
        console.log("It's a tie!")
        return [currentHumanScore, currentComputerScore];
    }
}

const playGame = () => {
    let rounds = 0;
    let humanScore = 0;
    let computerScore = 0;

    while(rounds < 5) {
        const [newHumanScore, newComputerScore] = playRound(humanScore, computerScore);
        humanScore = newHumanScore;
        computerScore = newComputerScore;
        rounds++;
        console.log(`Round ${rounds} scores: Human ${humanScore}, Computer ${computerScore}`);
    }
}

console.log(playGame());