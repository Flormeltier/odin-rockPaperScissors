console.log("Start");

/* Random computerChoice */
function getComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  if (choices.length <= 0) {
    return "Error";
  }

  /* random number from 0 to 0.99 */
  let index = Math.floor(Math.random() * choices.length);
  if (index >= choices.length || index < 0) {
    return choices[0];
  }

  /* random choice from  choices array */
  let computerSelection = choices[index];
  console.log(computerSelection); /* logs computer choice to console*/
  return computerSelection;
}

/* prompt to enter player Choice to lowercase*/
function getPlayerChoice() {
  let playerSelection = prompt("Enter Rock, Paper or Scissor!");
  playerSelection = playerSelection.toLowerCase(); /*convert to small letters*/
  return playerSelection;
}

/* win or lose algo*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Draw!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Paper beats Rock! You lose!");
    ++computerPoints;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("Rock beats Scissor, you win!");
    ++playerPoints;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Rock beats Paper, you win!");
    ++playerPoints;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("Scissor beats Paper, you lose");
    ++computerPoints;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log("Rock beats Scissor, you lose!");
    ++computerPoints;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("Scissor cuts Paper, you win");
    ++playerPoints;
  } else {
    console.log("Wrong input!");
  }
  console.log(playerPoints);
  return playerPoints;
}

let playerPoints = 0;
let computerPoints = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(playerSelection, computerSelection, playerPoints);

    console.log("Player: " + playerPoints, "Computer: " + computerPoints);
  }
  if (computerPoints > playerPoints) {
    console.log("You have lost!");
  } else if (computerPoints < playerPoints) {
    console.log("You Won!");
  } else {
    console.log("Draw!");
  }
}

game();
