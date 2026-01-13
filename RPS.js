let userScore = 0;
let compScore = 0;
let drawCount = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawCountPara = document.querySelector("#draw-count");
const resetBtn = document.querySelector("#reset-btn");


const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return option[randidx];
};


const drawGame = () => {
  drawCount++;
  drawCountPara.innerText = drawCount;
  msg.innerText = "Game Draw! Play Again";
  msg.style.backgroundColor = "#033042";
};


const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};


const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  drawCount = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  drawCountPara.innerText = drawCount;
  msg.innerText = "Scores Reset! Play Again";
  msg.style.backgroundColor = "#033042";
});

