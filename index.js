let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const GenCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randint = Math.floor(Math.random() * 3);
    return options[randint];
}

const msg = document.querySelector("#msg");

const drawGame = () => {
    console.log("It is a draw game");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#610cb0";
}

const winner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = `You lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = GenCompChoice();
    console.log("user choice is:", userChoice);
    console.log("computer choice is:", compChoice);

    if (userChoice === compChoice) {
        drawGame();

    } else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice == "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        winner(userWin, userChoice, compChoice);

    }
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")

        playGame(userChoice)
    })
})