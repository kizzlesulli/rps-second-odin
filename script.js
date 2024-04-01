//Get random number between 0 and three for computer choice

function getComputerChoice () {

    return Math.floor(Math.random() * 3);

}

//Check player input vs computer choice and return results

const roundsPlay = 5;

function playRound (player, computer) {

    //get results
    if (player == 'rock' && computer == 0 ||
        player == 'paper' && computer == 1 ||
        player == 'scissors' && computer == 2) {

        //return 'It\'s a tie this round.'
        return 'tie';

    } else if (player == 'rock' && computer == 2 ||
        player == 'paper' && computer == 0 ||
        player == 'scissors' && computer == 1) {
        
        //return 'You wind this round.'
        return true;

    } else if (player == 'rock' && computer == 1 ||
        player == 'paper' && computer == 2 ||
        player == 'scissors' && computer == 0) {
        
        //return 'You lose this round.'
        return false;
    }
}

//Get game results after all rounds played, or end game after player can no longer win.

function endGame (round, playerScore, computerScore) {

    if ( round == 1 && playerScore == computerScore) {

        console.log("Game over! It's a tie... How did that happen?");

    } else if (round == 1 && playerScore > computerScore) {

        console.log("Game over. You Win!");

    } else if (round == 1 && playerScore < computerScore) {

        console.log("Game over. You lose!");

    } else if (computerScore / roundsPlay > 0.5) {

        console.log("Game over. You lost in less than 5 rounds!");
        return true;

    }  else if (playerScore / roundsPlay > 0.5 ) {

        console.log("Game over. You won in less than 5 rounds!");
        return true;
    }
}


function playGame () {
    
    let playerScore = 0;
    let computerScore = 0;

    for (i = roundsPlay; i > 0; i--) {
    
        let playerSelection = prompt('Rock, paper or scissors?').toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        let roundsLeft;
        
        switch (playRound(playerSelection, computerSelection)) {
            case true:
                console.log('You win this round.');
                playerScore++;
                break;
            case false:
                console.log('You lose this round.');
                computerScore++;
                break;
            case 'tie':
                console.log('It\'s a tie.');
        }

        if (playerScore / roundsPlay > 0.5 || computerScore / roundsPlay > 0.5 ) {
            
            roundsLeft = `0 rounds left.`;

        } else {

            roundsLeft = `${i-1} rounds left.`;
        }

        // console.log (roundResults);
        console.log (playerScore, computerScore);
        console.log (roundsLeft);

        if (endGame(i, playerScore, computerScore)) {
            break;
        }
    }

    playAnother();
}

function playAnother () {
    let answer = prompt('yes or no?').toLocaleLowerCase();

    if (answer == 'yes') {
        playGame();
    }
}

playGame();