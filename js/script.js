const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * choices.length);
  return choices[randomIdx];
};

const playRound = (playerPicked, computerPicked) => {
  if (playerPicked === computerPicked) {
    return "It's a tie";
  }

  if (playerPicked === "rock") {
    if (computerPicked === "scissors") {
      return "You win";
    } else {
      return "You lose";
    }
  }

  if (playerPicked === "paper") {
    if (computerPicked === "rock") {
      return "You win";
    } else {
      return "You lose";
    }
  }

  if (playerPicked === "scissors") {
    if (computerPicked === "rock") {
      return "You win";
    } else {
      return "You lose";
    }
  }

  return "Invalid choice";
};

const updateResult = (result) => {
  const resultField = document.querySelector(".game-field__result");
  const playerScoreField = document.getElementById("human-score");
  const computerScoreField = document.getElementById("computer-score");

  resultField.textContent = result;
  playerScoreField.textContent = playerScore;
  computerScoreField.textContent = computerScore;
};

const game = (playerPicked) => {
  const computerPicked = computerPlay();
  const result = playRound(playerPicked, computerPicked);

  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }

  updateResult(result);
};

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
  game(rockBtn.value);
  console.log("clicked");
});

paperBtn.addEventListener("click", () => {
  game(paperBtn.value);
  console.log("clicked");
});

scissorBtn.addEventListener("click", () => {
  game(scissorBtn.value);
  console.log("clicked");
});
