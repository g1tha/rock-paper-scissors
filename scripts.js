
const options = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

playGame();

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        alert(`You win the game!
        Final score - You: ${playerScore} vs Computer: ${computerScore}`)
    } else if (playerScore < computerScore) {
        alert(`You lose the game!
        Final score - You: ${playerScore} vs Computer: ${computerScore}`)
    } else {
        alert (`Tie game!? We paid for blooood!
        Final score - You: ${playerScore} vs Computer: ${computerScore}`)
    }
}


function playRound() {
    computerSelection = computerPlay();
    playerSelection = null;
    while (options.indexOf(playerSelection) < 0) {
        playerSelection = prompt("rock, paper or scissors?").toLowerCase();
    }
    if (options.indexOf(playerSelection) === 2 && options.indexOf(computerSelection) === 0) {
        youLose();
    } else if (options.indexOf(playerSelection) === 0 && options.indexOf(computerSelection) === 2) {
        youWin();
    } else if (options.indexOf(playerSelection) > options.indexOf(computerSelection)) {
        youWin();
    } else if (options.indexOf(playerSelection) === options.indexOf(computerSelection)) {
        tie();
    } else {
        youLose();
    } 
}

function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
        return options[0];
    } else if (i === 1) {
        return options[1];
    } else {
        return options[2];
    }
}

function youWin() {
    playerScore++;
    alert(`You win the round, ${playerSelection} beats ${computerSelection}!
    Current score - You: ${playerScore} vs Computer: ${computerScore}`);
}

function youLose() {
    computerScore++;
    alert(`You lose the round, ${computerSelection} beats ${playerSelection}!
    Current score - You: ${playerScore} vs Computer: ${computerScore}`);
}

function tie() {
    alert(`You tied this round. You both chose ${playerSelection}!
    Current score - You: ${playerScore} vs Computer: ${computerScore}`)
}