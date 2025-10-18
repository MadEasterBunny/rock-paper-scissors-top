
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
    return choice;
}

console.log(getHumanChoice());