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
        return 'that means you won the game!';
    }else if (playerWinCount < computerWinCount){
        return 'that means you lost the game!';
    }else{
        return 'that means the game was a draw!';
    }
}
console.log(game());
