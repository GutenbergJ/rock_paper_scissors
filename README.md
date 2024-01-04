Some pseudocode for the game:

The computerChoice function generates numbers from 0 to 99 and makes a choice depending on the number (rock for 0-33, paper for 34-66, scissors for the rest)
The numbers in computerChoice are generated with a converted-to-string Math.random method, two first numbers after the zero are sliced out and give a number between 0 and 99.
The playRound function takes playerSelection and compares it against computerSelection, returning a string with the result of a match
The game function plays the game 5 times and keeps track of who the winner is based on players' performance
The game function declares 4 variables = playerSelection, computerSelection, playerScore and computerScore
The playerSelection variable is defined via a prompt, the computerSelection is defined via the function
There is a numbered game result constant for each of 5 games, once a game is played, the result is fed into the constant
String slices are taken out of game result constant and depending on the content of a slice, the playerScore/computerScore is incremented
# rock_paper_scissors