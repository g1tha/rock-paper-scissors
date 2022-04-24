
const options = ["rock", "paper", "scissors"];
const notificationPane = document.querySelector('.notifications');
const playerScorePane = document.querySelector('.playerScore');
const computerScorePane = document.querySelector('.computerScore');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const roundLabel = document.querySelector('.roundLabel');
const rounds = document.querySelector('.round');
const playerNode = document.querySelector('.player');
const playerBtns = playerNode.querySelectorAll('.btn');
const restart = document.querySelector('.restart');

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;
let maxRounds = parseInt(rounds.value);

rounds.addEventListener('change', roundValue);
playerBtns.forEach(e => e.addEventListener('click', playRound));
restart.addEventListener('click', clearScores);

function playRound() {
    playerSelection = this.className.split(" ")[0];
    playerChoice.innerHTML = `<img class="${playerSelection} icon" src="./img/${playerSelection}.svg" alt="${playerSelection}">${playerSelection}`;
    computerSelection = computerPlay();
    computerChoice.innerHTML = `<img class="${computerSelection} icon" src="./img/${computerSelection}.svg" alt="${computerSelection}">${computerSelection}`;
    if (roundCounter < maxRounds) {
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
    checkEnd(); 
}

function checkEnd() {
    if (roundCounter === maxRounds) {
        if (playerScore > computerScore) {
            notificationPane.textContent = `You win the game!`;
        } else if (playerScore < computerScore) {
            notificationPane.textContent = `You lose the game!`;
        } else {
            notificationPane.textContent = `Tie game!? We paid for blooood!`;
        }
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
    roundCounter++;
    notificationPane.textContent = `You win the round, ${playerSelection} beats ${computerSelection}!`;
    updateScore();
}

function youLose() {
    computerScore++;
    roundCounter++;
    notificationPane.textContent = `You lose the round, ${computerSelection} beats ${playerSelection}!`;
    updateScore();
}

function tie() {
    roundCounter++;
    notificationPane.textContent = `You tied this round. You both chose ${playerSelection}!`;
    updateScore();
}

function updateScore() {
    playerScorePane.textContent = `score: ${playerScore}`;
    computerScorePane.textContent = `score: ${computerScore}`;
    roundLabel.textContent = `round: ${roundCounter} of`;    
}

function clearScores() {
    computerScore = 0;
    playerScore = 0;
    roundCounter = 0;
    rounds.value = 5;
    maxRounds = parseInt(rounds.value);
    notificationPane.textContent = ``;
    updateScore();
}

function roundValue() {
    if (isNaN(rounds.value) || rounds.value < 1 || rounds.value > 9) {
        rounds.value = 5;
    }
    maxRounds = parseInt(rounds.value);
    console.log(maxRounds);
}