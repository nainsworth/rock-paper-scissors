const gameContainer = document.querySelector("#gameContainer");
const startTxt = document.createElement("p");
const startGame = document.createElement("button");
const gameTxt = document.createElement("p");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const resultContainer = document.querySelector("#resultContainer");
const gameResult = document.createElement("p");
const scoreBoard = document.createElement("p");
const playAgain = document.createElement("button");

let playerWins = 0;
let computerWins = 0;
// classLists
startTxt.classList.add("startTxt");
startGame.classList.add("startGame");
gameTxt.classList.add("gameTxt")
rockBtn.classList.add("gameBtn");
paperBtn.classList.add("gameBtn");
scissorsBtn.classList.add("gameBtn");
// Button IDs
rockBtn.id = "Rock";
paperBtn.id = "Paper";
scissorsBtn.id = "Scissors";
// innerTexts
startTxt.innerText = "Play a game of Rock Paper Scissors?";
startGame.innerText = "Start Game";
gameTxt.innerText = "Choose!";
rockBtn.innerText = "Rock";
paperBtn.innerText = "Paper";
scissorsBtn.innerText = "Scissors"
playAgain.innerHTML = "Play Again?"

// Start Game Function
window.onload(newGame());

function newGame() {
    gameContainer.appendChild(startTxt);
    gameContainer.appendChild(startGame);
    // Start Game once button is clicked
    startGame.addEventListener("click", () => {
        // Score Reset
        playerWins = 0;
        computerWins = 0;
        // Removes Start Game Text and Button
        gameContainer.removeChild(startTxt);
        gameContainer.removeChild(startGame);
        // Adds Game Text and Button
        game();
    })
}
  
// Creates Game Choices
function gameChoices() {
    gameContainer.appendChild(gameTxt);
    gameContainer.appendChild(rockBtn);
    gameContainer.appendChild(paperBtn);
    gameContainer.appendChild(scissorsBtn);
}

 // Computer's Game Choice
 function computerPlay() {
     //Randomly select numbers between 1-3
     let randomNum = Math.floor(Math.random() * 3) + 1;
     let computerChoice = "";
     //Convert Random Number to a selection string (i.e. Rock = 1, Paper = 2, Scissors = 3)
     if (randomNum === 1) {
         computerChoice = "Rock";
     }
     else if (randomNum === 2) {
         computerChoice = "Paper";
     }
     else {
         computerChoice = "Scissors";
     }
     //Return random selection
     return computerChoice;
 }

// Compares computer's and player's selection to determine winner
function playRound (playerSelection, computerSelection) { 
    let results = "";
    // Rock Conditions
    // Win
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        results = `YOU WIN! ${playerSelection} beats ${computerSelection}!`;
    }
    // Lose
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        results = `YOU LOSE! ${computerSelection} beats ${playerSelection}!`;
    }
    // Tie
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        results = `TIE GAME!`;
    }
    // Paper Conditions
    // Win
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        results = `YOU WIN! ${playerSelection} beats ${computerSelection}!`
    }
    // Lose
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        results = `YOU LOSE! ${computerSelection} beats ${playerSelection}!`
    }
    // Tie
    else if (playerSelection === "Paper" && computerSelection === "Paper") {
        results = `TIE GAME!`
    }
    // Scissors Conditions
    // Win
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        results = `YOU WIN! ${playerSelection} beats ${computerSelection}!`
    }
    // Lose
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        results = `YOU LOSE! ${computerSelection} beats ${playerSelection}!`
    }
    // Tie
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        results = `TIE GAME!`
    }
   // Error
    else {
        results = `ERROR! Something went wrong!`
    }
    // Return game result
    return results;
}

// Logs all the scores between rounds
function score(round) {
    //         let roundResult = playRound(gameButton, computerPlay());
    // Determine winner from round results
    let gameWin = round.includes("WIN");
    let gameLose = round.includes("LOSE");
    // Tie Game
    if (gameWin === false && gameLose === false){
        return [playerWins, computerWins];
    }
    // Player Wins 
    else if (gameWin === true){
        playerWins++;
        return [playerWins, computerWins];
    } 
    // Computer Wins
    else if (gameLose === true) {
        computerWins++;
        return [playerWins, computerWins];
    }
    // Error
    else {
        return alert(`Error: Something went wrong in the game!`);
    }
}

// Game Function to play until someone get 5 wins
function game() {
    gameChoices();
    const gameOptions = document.querySelectorAll(".gameBtn");
    gameOptions.forEach(button => button.addEventListener("click", function (e) {
        let roundResult = playRound(this.innerText, computerPlay());
        let scoreArray = score(roundResult);
        if (scoreArray[0] === 5 || scoreArray[1] === 5) {
            if (scoreArray[0] === 5) {
                gameOver("Player", scoreArray);
            }
            else {
                gameOver("Computer", scoreArray);
            }
        }
        else {
            gameResult.innerText = roundResult;
            scoreBoard.innerText = `Player: ${scoreArray[0]} - Computer: ${scoreArray[1]}`;
            resultContainer.appendChild(gameResult);
            resultContainer.appendChild(scoreBoard);
        }
    }))
}

// Displays a winner showing final scores
function gameOver(winner, scoreArray) {
    gameContainer.removeChild(gameTxt);
    gameContainer.removeChild(rockBtn);
    gameContainer.removeChild(paperBtn);
    gameContainer.removeChild(scissorsBtn);
    if (winner === "Player") {
        gameResult.innerHTML = `YOU WIN!`;
    }
    else {
        gameResult.innerHTML = `YOU LOSE!`;
    }
    scoreBoard.innerText = `Player: ${scoreArray[0]} - Computer: ${scoreArray[1]}`;
    startOver();
}

// Displays a button to play agin
function startOver() {
    resultContainer.appendChild(playAgain);
    playAgain.addEventListener("click", () => {
        newGame();
        resultContainer.removeChild(gameResult);       ;
        resultContainer.removeChild(scoreBoard);
        resultContainer.removeChild(playAgain);
    });
}




