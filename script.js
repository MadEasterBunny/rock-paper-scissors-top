
const getRandomNum = num =>{
    return Math.floor(Math.random() * num);
}

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const choiceInx = getRandomNum(choices.length);
    return choices[choiceInx];
}

console.log(getComputerChoice());