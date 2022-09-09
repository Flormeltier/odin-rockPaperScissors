console.log("Start");

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissor"];
  var choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}
