function computerPlay() {                                       // Create function computerPlay
    const arr = ["rock", "paper", "scissors"];
    const itemIndex = Math.floor(Math.random() * arr.length);
    const item = arr[itemIndex];
    return item;                                                // Return random Rock Paper or Scissors
}

// Create function playRound that takes two parameters: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {             //Case insensitive input
        if (computerSelection === "rock") {                     //Return string based on outcome
            return "Draw!";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors.";
        } else {
            return "You Lose! Paper beats Rock.";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {  //Case insensitive input
        if (computerSelection === "scissors") {                 //Return string based on outcome
            return "Draw!";
        } else if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors.";
        } else {
            return "You Win! Paper beats Scissors.";
        }
    } else if (playerSelection.toLowerCase() === "paper") {       //Case insensitive input
        if (computerSelection === "paper") {                    //Return string based on outcome
            return "Draw!";
        } else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock.";
        } else {
            return "You Lose! Scissors beats Paper.";
        }
    }
}

console.log(playRound("Paper", computerPlay()))



// Create function game()
function game() {
}
//     Loop function playRound
//     console.log each round
//     return winner or loser after N games
//     prompt user for inputs

