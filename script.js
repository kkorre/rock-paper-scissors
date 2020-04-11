const btns = document.querySelectorAll(".btn-icon");
const screen1 = document.querySelector("#screen-1");
const screen2 = document.querySelector("#screen-2");
const result = document.querySelector("#result");
const userScoreText = document.querySelector("#user-score");
const computerScoreText = document.querySelector("#computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playAgainBtn = document.querySelector("#play-again");
const computerPickImg = document.querySelector("#computer-pick-img");
const userPickImg = document.querySelector("#user-pick-img");
const btnRules = document.querySelector(".btn-rules");
const btnClose = document.querySelector(".close");
const modal = document.querySelector(".modal");
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let resultText;

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
  if (userChoice !== null) {
    userPickImg.classList.remove(userChoice);
  }
  userChoice = e.target.textContent;
  userPickImg.classList.add(userChoice);
  setTimeout(function () {
    userPickImg.classList.add("scale");
  }, 400);
}

function getComputerChoice() {
  if (computerChoice !== null) {
    computerPickImg.classList.remove(computerChoice);
  }
  const computerIndex = Math.floor(Math.random() * 5);
  computerChoice = choices[computerIndex];
  computerPickImg.classList.add(computerChoice);
  setTimeout(function () {
    computerPickImg.classList.add("scale");
  }, 1000);
}

function calculateResult() {
  if (userChoice === computerChoice) {
    resultText = "It's a tie";
    updateUserScore();
    updateComputerScore();
    return;
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper" || computerChoice === "spock") {
      resultText = "Computer wins!";
      updateComputerScore();
    } else {
      resultText = "You win!";
      updateUserScore();
    }
    return;
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors" || computerChoice === "lizard") {
      resultText = "Computer wins!";
      updateComputerScore();
    } else {
      resultText = "You win!";
      updateUserScore();
    }
    return;
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock" || computerChoice === "spock") {
      resultText = "Computer wins!";
      updateComputerScore();
    } else {
      resultText = "You win!";
      updateUserScore();
    }
    return;
  }

  if (userChoice === "lizard") {
    if (computerChoice === "rock" || computerChoice === "scissors") {
      resultText = "Computer wins!";
      updateComputerScore();
    } else {
      resultText = "You win!";
      updateUserScore();
    }
    return;
  }

  if (userChoice === "spock") {
    if (computerChoice === "paper" || computerChoice === "lizard") {
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

// Show the first screen, in order to play again
playAgainBtn.addEventListener("click", () => {
  screen2.classList.remove("visible");
  screen1.classList.add("visible");
  userPickImg.classList.remove("scale");
  computerPickImg.classList.remove("scale");
});

// Modal visibility
btnRules.onclick = () => (modal.style.display = "block");
btnClose.onclick = () => (modal.style.display = "none");
