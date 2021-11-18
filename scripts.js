/*
define variable that is either 1, 2 or 3
return rock if 1
return paper if 2
return scissors if 3
*/
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

//prompt user for rock paper or scissors
//const playerSelection = prompt("Enter rock paper or scissors!");

/*
generate a new computer selection at the start of each round
return who won each round
increase counter based on who won
*/
function playRound(computerSelection, playerSelection){
    computerSelection = computerPlay();
    switch (true){
        case computerSelection === playerSelection:
            return 'you drew round ';
        case 
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper'):
            computerWinCount++;
            return 'you lost round ';
        case
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper'):
            playerWinCount++;
            return 'you won round ';
    }
}

/*
call and print playRound 5 times
compare the counters and see who won the overall game
*/
function game(){
    for (let i = 1; i <= 5; i++){
        console.log(playRound(computerPlay(), playerSelection.toLowerCase()) + i);
    }
    if (playerWinCount > computerWinCount){
        return 'You won the game!';
    }else if (playerWinCount < computerWinCount){
        return 'You lost the game!';
    }else{
        return 'The game was a draw!';
    }
}
const resultsContainer = document.querySelector('#resultsContainer');
const results = document.createElement('div');
results.style.cssText = 'display: flex; justify-content: center; align-items: center; padding: 20px';
results.innerHTML = '<h1>You won the game!</h1>';
results.classList.add('results');
resultsContainer.appendChild(results);


//game();
/*if (game() === 'You won the game!'){
    results.innterHTML = '<h1>You won the game!</h1>';
}else if (game() === 'You lost the game!'){
    results.innerHTML = '<h1>You lost the game!</h1>';
}else{
    results.innerHTML = '<h1>The game was a draw!</h1>';
}*/


