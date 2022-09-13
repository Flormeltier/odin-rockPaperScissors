console.log("Start");

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissor"];
  if (choices.length <= 0) {
    return "Error";
  }

  let index = Math.floor(Math.random() * choices.length);
  if (index >= choices.length || index < 0) {
    return choices[0];
  }

  let computerSelection = choices[index];
  return computerSelection;
  console.log(computerSelection);
}

function getPlayerChoice() {
  let playerSelection = prompt("Enter Rock, Paper or Scissor!");
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

function playOneRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("Draw!");
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    alert("Paper beats Rock! You lose!");
  } else if (playerSelection === "rock" && computerSelection === "Scissor") {
    alert("Rock beats Scissor, you win!");
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    alert("Rock beats Paper, you win!");
  } else if (playerSelection === "paper" && computerSelection === "Scissor") {
    alert("Scissor beats Paper, you lose");
  } else if (playerSelection === "scissor" && computerSelection === "Rock") {
    alert("Rock beats Scissor, you lose!");
  } else if (playerSelection === "scissor" && computerSelection === "Paper") {
    alert("Scissor cuts Paper, you win");
  } else {
    alert("Wrong input!");
  }
}

playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();
playOneRound(playerSelection, computerSelection);
