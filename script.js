//Get random number between 0 and three for computer choice



function getComputerChoice () {

    let computerChoice = Math.floor(Math.random() * 3);

    return computerChoice;
}

getComputerChoice();