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
    } else if (playerSelection.toLowerCase() === "paper") {     //Case insensitive input
        if (computerSelection === "paper") {                    //Return string based on outcome
            return "Draw!";
        } else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock.";
        } else {
            return "You Lose! Scissors beats Paper.";
        }
    }
}


function game() {                                              // Create function game()
    let user1 = 0;
    let user2 = 0;
    for (let i = 0; i < 5; i++) {                               // Loop function playRound
        let result = playRound(prompt("Type in your choice"), computerPlay());   // prompt user for input and console.log each round
        console.log(result)
        if (result.startsWith("You Win!")) {
            user1 += 1;
        } else if (result.startsWith("You Lose!")) {
            user2 += 1;
        }
    }   
    console.log("Player: " + user1, "Computer: " + user2)
    if (user1 > user2) {                                        // Return winner or loser after N games
        console.log('You Win!');
    } else if (user1 < user2) {
        console.log('You Lose!');
    }
}
game()