function computerPlay() {                                       // Create function computerPlay
    const arr = ["rock", "paper", "scissors"];
    const itemIndex = Math.floor(Math.random() * arr.length);
    const item = arr[itemIndex];
    return item;                                                // Return random Rock Paper or Scissors
}

let playerScore = 0;
let computerScore = 0;
// Create function playRound that takes two parameters: playerSelection and computerSelection
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = ""
  if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
      (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
      (playerSelection.toLowerCase() === "scissors" & computerSelection === "paper")) {
        playerScore += 1;
        result = `You Won! ${playerSelection} beats ${computerSelection}`;
      } else if (playerSelection === computerSelection) {
          result = "Draw!";
      } else {
          computerScore += 1;
          result = `You Lose! ${computerSelection} beats ${playerSelection}`;
      }
document.getElementById('result').innerHTML = result;
let totalScore = `Player: ${playerScore} | Computer: ${computerScore}`;
document.getElementById('totalScore').innerHTML = totalScore;
if(playerScore === 5 && computerScore < 5) {
    alert("You Won! Refresh to play again.");
} else if (computerScore === 5 && playerScore <5) {
    alert("You Lose! Refresh to play again.")
}
}





const rock = document.getElementById('rock');
    rock.addEventListener('click', () => playRound("rock", computerPlay()));

const paper = document.getElementById('paper');
    paper.addEventListener('click', () => playRound("paper", computerPlay()));

const scissors = document.getElementById('scissors');
    scissors.addEventListener('click', () => playRound("scissors", computerPlay()));




/*function game() {                                              // Create function game()
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
} */