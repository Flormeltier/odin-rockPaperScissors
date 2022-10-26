/* random computerChoice */
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
  return computerSelection;
}

/* win or lose algo*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playFeed.textContent = "Draw, try again ";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    playFeed.textContent = "Paper beats Rock! You LOSE!";
    ++computerPoints;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playFeed.textContent = "Rock beats Scissor, you WIN!";
    ++playerPoints;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playFeed.textContent = "Paper beats Rock, you WIN!";
    ++playerPoints;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    playFeed.textContent = "Scissor beats Paper, you LOSE";
    ++computerPoints;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    playFeed.textContent = "Rock beats Scissor, you LOSE!";
    ++computerPoints;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playFeed.textContent = "Scissor cuts Paper, you WIN";
    ++playerPoints;
  } else {
    playFeed.textContent = "Wrong input!";
  }
  console.log(playerPoints);
  return playerPoints;
  return computerPoints;
}

function youWon() {}
function youLost() {}

/* define global variable*/

let playerPoints = 0;
let computerPoints = 0;
const roundsToWin = 5;
const btns = document.querySelectorAll("button");
const playFeed = document.getElementById("playFeed");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

if (playerPoints < roundsToWin && computerPoints < roundsToWin) {
  function play() {
    let computerSelection = getComputerChoice();
    let playerSelection = this.classList.value;
    playRound(playerSelection, computerSelection);

    playerScore.textContent = "Player: " + playerPoints;
    computerScore.textContent = "CPU: " + computerPoints;
  }
} else if (playerPoints === roundsToWin) {
  playFeed.textContent = "You WON the Game!";
} else if (computerPoints === roundsToWin) {
  playFeed.textContent = "You LOST, Looser!";
}
btns.forEach((btns) => btns.addEventListener("click", play));
