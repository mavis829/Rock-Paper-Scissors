console.log("Hello World");

function getComputerChoice{
  let randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
    randomChoice = "Rock";
  } else if (randomInt === 1) {
    randomChoice = "Paper";
  }
    else {
      randomChoice = "Scissor";
    }
return randomChoice;

  
}
