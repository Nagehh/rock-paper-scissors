function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    let randomNumber = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomNumber]
    return computerChoice;
}

function getHumanChoice() {
    let choice = prompt('Choose rock, paper or scissors');
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
    else if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log(`It's a tie!`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log(`It's a tie!`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log(`It's a tie!`);
    }
    else {
        console.log(`It's a tie!`);
    }
}
    
function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log('You are the winner!');
    }
    else if (humanScore < computerScore) {
        console.log('The computer is the winner!');
    }
    else {
        console.log("It's a tie!");
    }

    humanScore = 0;
    computerScore = 0;
}

playGame();