function computerPlay() {                 // Create function computerPlay
    const arr = ["Rock", "Paper", "Scissors"];
    const itemIndex = Math.floor(Math.random() * arr.length);
    const item = arr[itemIndex];
    return item;                          // Return random Rock Paper or Scissors
}


// Create function playRound that takes two parameters: playerSelection and computerSelection
//     Return string "You lose! X beats Y"
// playerSelection must be case insensitive

// Create function game()
//     Loop function playRound
//     console.log each round
//     return winner or loser after N games
//     prompt user for inputs

