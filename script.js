//Get random number between 0 and three for computer choice

function getComputerChoice () {

    return Math.floor(Math.random() * 3);

}

//Check player input vs computer choice and return results

const roundsPlay = 5;
let playerScore = 0;
let computerScore = 0;

function playRound (player, computer) {

    //get results
    if (player == 'rock' && computer == 0 ||
        player == 'paper' && computer == 1 ||
        player == 'scissors' && computer == 2) {
        
        return 'It\'s is a tie.';

    } else if (player == 'rock' && computer == 2 ||
        player == 'paper' && computer == 0 ||
        player == 'scissors' && computer == 1) {
        
        playerScore++;
        return "You win this round.";

    } else if (player == 'rock' && computer == 1 ||
        player == 'paper' && computer == 2 ||
        player == 'scissors' && computer == 0) {
        
        computerScore++;
        return "Computer wins this round.";
    }
}

//Get game results after all rounds played, or end game after player can no longer win.

function endGame (round) {
    
    let gameResults;

    if ( round == 1 && playerScore == computerScore) {

        gameResults = "Game over! It's a tie... How did that happen?";
        console.log(gameResults);

    } else if (round == 1 && playerScore > computerScore) {

        gameResults = "Game over. You Win!";
        console.log(gameResults);

    } else if (round == 1 && playerScore < computerScore) {

        gameResults = "Game over. You lose!";
        console.log(gameResults);

    } else if (computerScore / roundsPlay > 0.5) {

        gameResults = `Game over. You lost in less than 5 rounds!`;
        console.log(gameResults);
        return true;

    }  else if (playerScore / roundsPlay > 0.5 ) {
        
        gameResults = `Game over. You won in less than 5 rounds!`;
        console.log(gameResults);
        return true;
    }
}


function playGame () {
    
    for (i = roundsPlay; i > 0; i--) {
    
        let playerSelection = prompt('Rock, paper or scissors?').toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        let roundResults = playRound(playerSelection, computerSelection);
        let roundsLeft;
        
        if (playerScore / roundsPlay > 0.5 || computerScore / roundsPlay > 0.5 ) {
            
            roundsLeft = `0 rounds left.`;

        } else {

            roundsLeft = `${i-1} rounds left.`;
        }

        console.log (roundResults, roundsLeft);
        console.log (playerScore, computerScore);

        if (endGame(i)) {
            break;
        }
    }
}

playGame();