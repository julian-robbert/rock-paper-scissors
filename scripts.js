//makes computer's choice between R P or S
function computerPlay(){
    let throwChoice = Math.floor(Math.random()*3) + 1;
    switch (throwChoice){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

//keep track of how many times user and comp has won
let playerWinCount = 0;
let computerWinCount = 0;

//pastes a div that says who won, and a button that lets you play again
const resultsContainer = document.querySelector('#resultsContainer');
const results = document.createElement('div');
results.classList.add('results');
results.style.cssText = 'display: flex; justify-content: center; align-items: center;';

const refreshButton = document.createElement('div');
refreshButton.classList.add('refreshButton');
refreshButton.innerHTML = '<button style = "width: 200px; height: 50px; background-color: #edbbb4; font-size: 24px; font-weight: bold; border: 1px solid black; border-radius: 10px " type="submit" onClick = "window.location.reload()"";>Play Again!</button>';

//determines who won and what the results message will say
function whoWon(){
    if (playerWinCount > computerWinCount){
        results.innerHTML = '<h1>You won the game!</h1>';
    }else if (playerWinCount < computerWinCount){
        results.innerHTML = '<h1>You lost the game!</h1>';
    }else{
        results.innerHTML = '<h1>The game was a draw!</h1>';
    }
}

//initializing counter displays
const computerWinCounterDisplay = document.querySelector('#computerWinCounterDisplay');
const playerWinCounterDisplay = document.querySelector('#playerWinCounterDisplay');
const tieCounterDisplay = document.querySelector('#tieCounterDisplay');

//plays one round and updates the counters accordingly, calls whoWon once someone gets 5 points
function playRound(computerSelection, playerSelection){
    switch (true){
        case computerSelection === playerSelection:
            tieCounterDisplay.append('|');
            console.log('draw');
            break;
        case 
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper'):
            computerWinCount++;
            computerWinCounterDisplay.append('|');
            console.log('comp win');
            break;
        case
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper'):
            playerWinCount++;
            playerWinCounterDisplay.append('|');
            console.log('player win');
            break;
    }

    if(playerWinCount === 5 || computerWinCount === 5){
        whoWon();
        resultsContainer.appendChild(results);
        resultsContainer.appendChild(refreshButton);
        document.getElementById('rockButton').removeEventListener('click', playRock);
        document.getElementById('paperButton').removeEventListener('click', playPaper);
        document.getElementById('scissorsButton').removeEventListener('click', playScissors);
    }
}

//makes the selection buttons clickable, executes according play function
document.getElementById('rockButton').addEventListener('click', playRock);
document.getElementById('paperButton').addEventListener('click', playPaper);
document.getElementById('scissorsButton').addEventListener('click', playScissors);

//these functions are called when someone clicks either the rock, paper, or scissors buttons
function playRock(){
    computerSelection = computerPlay();
    playerSelection = 'rock';
    playRound(computerPlay(), playerSelection);
}

function playPaper(){
    computerSelection = computerPlay();
    playerSelection = 'paper';
    playRound(computerPlay(), playerSelection);
}

function playScissors(){
    computerSelection = computerPlay();
    playerSelection = 'scissors';
    playRound(computerPlay(), playerSelection);
}