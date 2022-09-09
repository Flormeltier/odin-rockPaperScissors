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

  let choice = choices[index];
  return choice;
}

let message = getComputerChoice();
console.log(message);
