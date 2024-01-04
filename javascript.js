function getComputerChoice() {
    let randomNumber = String(Math.random());
    let usableRandomNumber = +randomNumber.slice(13, 15);

    if (usableRandomNumber >= 0 && usableRandomNumber <= 33) {
        return "rock";
    } else if (usableRandomNumber >= 34 && usableRandomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
if (playerSelection === "rock" && computerSelection === "rock") {
    return "Tie! Rock is equal to rock.";
} else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Tie! Paper is equal to paper.";
} else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "Tie! Scissors are equal to scissors.";
} else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "Tie! Scissors are equal to scissors.";
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors.";
} else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock.";
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat paper.";
} else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock.";
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat paper.";
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors.";
} else {
    console.log("Wrong input! Check the spelling!");
}
}

function game() {
    let playerSelection;
    let computerSelection;

    let playerScore = 0;
    let computerScore = 0;

    
    playerSelection = prompt("Choose one of the following: rock, paper or scissors.");
    computerSelection = getComputerChoice(); 
    const gameOneResult = playRound(playerSelection, computerSelection);
    console.log(gameOneResult);
    if (gameOneResult.slice(0, 5) === "You w") {
        ++playerScore;
    } else if (gameOneResult.slice(0, 5) === "You l") {
        ++computerScore;
    }

    playerSelection = prompt("Choose one of the following: rock, paper or scissors.");
    computerSelection = getComputerChoice(); 
    const gameTwoResult = playRound(playerSelection, computerSelection);
    console.log(gameTwoResult);
    if (gameTwoResult.slice(0, 5) === "You w") {
        ++playerScore;
    } else if (gameTwoResult.slice(0, 5) === "You l") {
        ++computerScore;
    }


    playerSelection = prompt("Choose one of the following: rock, paper or scissors.");
    computerSelection = getComputerChoice(); 
    const gameThreeResult = playRound(playerSelection, computerSelection);
    console.log(gameThreeResult);
    if (gameThreeResult.slice(0, 5) === "You w") {
        ++playerScore;
    } else if (gameThreeResult.slice(0, 5) === "You l") {
        ++computerScore;
    }

    playerSelection = prompt("Choose one of the following: rock, paper or scissors.");
    computerSelection = getComputerChoice(); 
    const gameFourResult = playRound(playerSelection, computerSelection);
    console.log(gameFourResult);
    if (gameFourResult.slice(0, 5) === "You w") {
        ++playerScore;
    } else if (gameFourResult.slice(0, 5) === "You l") {
        ++computerScore;
    }

    playerSelection = prompt("Choose one of the following: rock, paper or scissors.");
    computerSelection = getComputerChoice(); 
    const gameFiveResult = playRound(playerSelection, computerSelection);
    console.log(gameFiveResult);
    if (gameFiveResult.slice(0, 5) === "You w") {
        ++playerScore;
    } else if (gameFiveResult.slice(0, 5) === "You l") {
        ++computerScore;
    }
    
    console.log("PScore is ", playerScore)
    console.log("CScore is ", computerScore)

    if (playerScore > computerScore) {
        return "Player wins!"
    } else if (computerScore > playerScore) {
        return "Computer wins!"
    } else {
        return "Tie! Nobody wins!"
    }
}