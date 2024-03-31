//Get random number between 0 and three for computer choice

function getComputerChoice () {

    return Math.floor(Math.random() * 3);

}

//Check player input vs computer choice and return results

function playRound (player, computer) {
    
    let playerNumber ;
    let results;

    // switch (playerSelection) {
    //     case 'rock':
    //         playerNumber = 0
    //         break;
    //     case 'paper':
    //         playerNumber = 1;
    //         break;
    //     case 'scissors':
    //         playerNumber = 2;
    // }

    //get results
    if (
        player == 'rock' && computer == 0 ||
        player == 'paper' && computer == 1 ||
        player == 'scissors' && computer == 2) {
        
        results = 'It\'s is a tie.';

    } else if (
        player == 'rock' && computer == 2 ||
        player == 'paper' && computer == 0 ||
        player == 'scissors' && computer == 1) {
        
        results = "You win.";
    } else if (
        player == 'rock' && computer == 1 ||
        player == 'paper' && computer == 2 ||
        player == 'scissors' && computer == 0){
        
        results = "Computer win.";
    }

    return results;
}

let playerSelection = prompt('Rock, paper or scissors?').toLocaleLowerCase();
let computerSelection = getComputerChoice();
let results = playRound(playerSelection, computerSelection);

console.log (playerSelection, computerSelection, results);