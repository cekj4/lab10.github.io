let userOption = null;
let attempts = 0;
let computerPreviousChoice = null;
const allAttempts = 5; // Total games 
const userChoices = [];

function gameOption(option) {
    userOption = option;
    const options = ["Rock", "Paper", "Scissors"];
    document.getElementById("placeholder").innerText = `You selected ${options[userOption-1]}`;
}

function game() {
    if (userOption === null) {
        document.getElementById("placeholder").innerText = "Please select Rock, Paper, or Scissors!";
        return;
    }
    let computerOption;
    do {
        computerOption = Math.floor(Math.random() * 3) + 1;
    } while (computerOption === computerPreviousChoice);
    computerPreviousChoice = computerOption;

    const options = ["Rock", "Paper", "Scissors"];
    const userChoice = options[userOption - 1];
    const computerChoice = options[computerOption - 1];
    
    let message;
    if (userChoice === computerChoice) {
        message = "It's a draw!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        message = "You won!";
    } else {
        message = "You lost!";
    }
    userChoices.push(`Game ${attempts + 1}: You chose ${userChoice}, Computer chose ${computerChoice} - ${message}`);
    attempts++; //
    const attemptsLeft = allAttempts - attempts;
    if (attempts >= allAttempts) {
        let results = "Game over! Your results for each game: <br>";
        for (let i = 0; i<userChoices.length; i++){
            results += `${userChoices[i]} <br>`;
        }
        results += "Refresh the page to play again";
        document.getElementById("placeholder").innerHTML = `Game over! Your results: <br>`;
        document.getElementById("placeholder").innerHTML = results;
        document.getElementById("submitButton").style.display = "none"; // 
    } else {
        document.getElementById("placeholder").innerText = `You have ${attemptsLeft} game(s) left.`;
    }
    userOption = null; 
}
