function getComputerChoice(){
  let randomInt = Math.floor(Math.random() * 3);
  let randomChoice;
  if (randomInt === 0) {
    randomChoice = "rock";
  } else if (randomInt === 1) {
    randomChoice = "paper";
  }
    else {
      randomChoice = "scissor";
    }
return randomChoice;
}

console.log("Computer Choice is " + getComputerChoice());

function getHumanChoice(){
  let choice = prompt("Rock, paper or scissors?");
  return choice;
}

console.log("Human Choice is " + getHumanChoice());

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice){
    humanChoice = humanSelection.toLowerCase();
    computerChoice = computerSelection.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("Let's play again!");
    } else if ( (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissor" && computerChoice === "paper") ||
              (humanChoice === "rock" && computerChoice === "scissor")
              ) {
      console.log("You lose! " + computerChoice + "beats" + humanChoice);
       computerScore++;
              }
  else {
    console.log("You win! " + humanChoice + "beats" + computerChoice);
      humanScore++;
  }
console.log("Human Score is " + humanScore + "vs Computer Score is " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
   for (let i=0; i<5 ; i++){
     playRound(humanSelection,computerSelection);
   }
}

