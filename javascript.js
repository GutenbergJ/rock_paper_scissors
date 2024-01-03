function getComputerChoice() {
    let randomNumber = String(Math.random());
    let usableRandomNumber = +randomNumber.slice(2, 4);

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
}}
const playerSelection = "rock";
const computerSelection = getComputerChoice(); 
