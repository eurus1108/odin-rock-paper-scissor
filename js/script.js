const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * choices.length);
  const choice = choices[randomIdx];
  document.querySelector("[data-computer]").src = `./assets/icon-${choice}.svg`;
  return choice;
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
    if (computerPicked === "paper") {
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

  setInterval(() => {
    if (playerScore === 5) {
      alert("You win!");
      location.href = location.href;
    } else if (computerScore === 5) {
      alert("You loose");
      location.href = location.href;
    }
  }, 5000);
};

const changeClass = () => {
  const hidden = document.querySelectorAll(".hidden");

  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.remove("hidden");
  }

  const notStart = document.querySelectorAll(".not-start");

  for (let i = 0; i < notStart.length; i++) {
    notStart[i].classList.add("hidden");
  }
};

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

const playerSelectionDisplay = document.querySelector("[data-human]");

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
  changeClass();
  game(rockBtn.value);
  playerSelectionDisplay.src = `./assets/icon-${rockBtn.value}.svg`;
});

paperBtn.addEventListener("click", () => {
  changeClass();
  playerSelectionDisplay.src = `./assets/icon-${paperBtn.value}.svg`;
  game(paperBtn.value);
});

scissorBtn.addEventListener("click", () => {
  game(scissorBtn.value);
  playerSelectionDisplay.src = `./assets/icon-${scissorBtn.value}.svg`;
  changeClass();
});
