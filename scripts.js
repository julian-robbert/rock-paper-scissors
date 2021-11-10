/*this functions defines the variable throwChoice which is assigned a
value between 1 and 3. these values coincide with either rock paper
or scissors which the function returns with the switch statement*/
function computerPlay(){
    let throwChoice = Math.floor(Math.random()*3) + 1;
    switch (throwChoice){
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}
console.log(computerPlay());