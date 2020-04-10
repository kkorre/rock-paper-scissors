const btns = document.querySelectorAll(".btn");
const screen1 = document.querySelector("#screen-1");
const screen2 = document.querySelector("#screen-2");
const result = document.querySelector("#result");
const userPick = document.querySelector("#user-pick");
const computerPick = document.querySelector("#computer-pick");
const userScoreText = document.querySelector("#user-score");
const computerScoreText = document.querySelector("#computer-score");
const choices = ["rock", "paper", "scissors"];
const playAgainBtn = document.querySelector("#play-again");
let userChoice;
let computerChoice;
let resultText;
let userScore = 0;
let computerScore = 0;

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    //Get the user choice
    getUserChoice(e);

    //Get the computer choice
    getComputerChoice();

    //Calculate and update the result
    calculateResult();
    result.textContent = resultText;

    //Go to the results screen
    screen1.classList.remove("visible");
    screen2.classList.add("visible");
  })
);

function getUserChoice(e) {
  userChoice = e.target.textContent;
  userPick.textContent = userChoice;
}

function getComputerChoice() {
  const computerIndex = Math.floor(Math.random() * 3);
  computerChoice = choices[computerIndex];
  computerPick.textContent = computerChoice;
}

function calculateResult() {
  if (userChoice === computerChoice) {
    resultText = "It's a tie";
    updateUserScore();
    updateComputerScore();
    return;
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      resultText = "Computer wins!";
      updateComputerScore();
    } else {
      resultText = "You win!";
      updateUserScore();
    }
    return;
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      resultText = "Computer wins!";
      updateComputerScore();
    } else {
      resultText = "You win!";
      updateUserScore();
    }
    return;
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      resultText = "Computer wins!";
      updateComputerScore();
    } else {
      resultText = "You win!";
      updateUserScore();
    }
    return;
  }
}

function updateUserScore() {
  userScore++;
  userScoreText.textContent = userScore;
}

function updateComputerScore() {
  computerScore++;
  computerScoreText.textContent = computerScore;
}

playAgainBtn.addEventListener("click", () => {
  screen2.classList.remove("visible");
  screen1.classList.add("visible");
});
