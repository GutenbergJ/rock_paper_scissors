function getComputerChoice() {
    let randomNumber = String(Math.random());
    let usableRandomNumber = +randomNumber.slice(2, 4);

    if (usableRandomNumber >= 0 && usableRandomNumber <= 33) {
        return "Rock";
    } else if (usableRandomNumber >= 34 && usableRandomNumber <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}