function getComputerChoice(){
  let randomInt = Math.floor(Math.random() * 3);
  let randomChoice;
  if (randomInt === 0) {
    randomChoice = "rock";
  } else if (randomInt === 1) {
    randomChoice = "paper";
  }
    else {
      randomChoice = "scissors";
    }
return randomChoice;
  console.log("Computer Choice is " + getComputerChoice());
}


function getHumanChoice(){
  let choice = prompt("Rock, paper or scissors?");
  return choice;
  console.log("Human Choice is " + getHumanChoice());
}


function playGame(){
  
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie! You both chose " + humanChoice);
    } else if ( (humanChoice === "rock" && computerChoice === "paper") ||
              (humanChoice === "paper" && computerChoice === "scissors") ||
              (humanChoice === "scissors" && computerChoice === "rock")
              ) {
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
       computerScore++;
              }
  else {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanScore++;
  }
console.log("Your Score is " + humanScore + " vs Computer Score is " + computerScore);
}

   for (let i=0; i<5 ; i++){
     const humanSelection = getHumanChoice();
     const computerSelection = getComputerChoice();
     playRound(humanSelection,computerSelection);
   }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a tie!");
  }

  
}

playGame(); 
