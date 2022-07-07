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

// Player's Game Choice String Conversion
function playersPlay(playersChoice) {
    //Take users input and split first lett and rest
    playersChoice = playersChoice[0].toUpperCase() + playersChoice.slice(1).toLowerCase();

    //Return player selection
    return playersChoice;
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

function game() {
    // Variable to count round wins
    let playerWins = 0;
    let computerWins = 0;
    let winner = "";
    let player = "Rock";
    let gameWin = false;
    let gameLose = false;
       
    // Create a loop for 5 games
    for (let i = 0; i < 5; i++) {
        // Determine winner from round results
        gameWin = playRound(player, computerPlay()).includes("WIN");
        gameLose = playRound(player, computerPlay()).includes("LOSE");
        //console.log(playRound(player, computerPlay()));
        //console.log(gameWin, gameLose);
        // Tie and round repeats
        if (gameWin === false && gameLose === false) {
            i--;
        }
        // Player Wins
        else if (gameWin === true){
            playerWins++; 
            gameLose = false
        } 
        // Computer Wins
        else if (gameLose === true) {
            computerWins++;
            gameWin = false;
        }
        
        // Error
        else {
            return winner = `Error: Something went wrong in the game!`
        }
        console.log(playerWins, computerWins); 

        // First to win 3 Games win
        // Player wins the game
        if (playerWins == 3) {
            return winner = `YOU WIN THE GAME! Player: ${playerWins} Computer: ${computerWins}`
        }
        // Computer wins the game
        else if (computerWins == 3) {
            return winner = `YOU LOST THE GAME! Player: ${playerWins} Computer: ${computerWins}`
        }

    }
}

console.log(game());
