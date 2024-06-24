console.log("ROCK PAPER SCISSORS");

let humanScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];

let player = getPlayerChoice();
let computer = getComputerChoice();
playRound(player, computer);

function getPlayerChoice() {
  const pC = prompt("Rock, Paper, or Scissors?");
  return pC;
}

function getComputerChoice() {
  const cC = Math.floor(Math.random() * options.length);
  return options[cC];
}

function playRound(player, computer) {
  console.log(
    "You chose " + player + ". " + "Computer chose " + computer + "."
  );

  if (player == computer) {
    console.log("It's a tie!");
    score(humanScore, computerScore);
  } else if (player == "rock") {
    if (computer == "scissors") {
      console.log("Rock smashes scissors! You win!");
      humanScore++;
      score(humanScore, computerScore);
    } else {
      console.log("Paper covers rock! You lose.");
      computerScore++;
      score(humanScore, computerScore);
    }
  } else if (player == "paper") {
    if (computer == "rock") {
      console.log("Paper covers rock! You win!");
      humanScore++;
      score(humanScore, computerScore);
    } else {
      console.log("Scissors cuts paper! You lose.");
      computerScore++;
      score(humanScore, computerScore);
    }
  } else if (player == "scissors") {
    if (computer == "paper") {
      console.log("Scissors cuts paper! You win!");
      humanScore++;
      score(humanScore, computerScore);
    } else {
      console.log("Rock smashes scissors! You lose.");
      computerScore++;
      score(humanScore, computerScore);
    }
  }
}

function score(humanScore, computerScore) {
  console.log("You: " + humanScore, "Computer: " + computerScore);
}
