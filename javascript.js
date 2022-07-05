
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

// Player's Game Choice
function playersPlay(playersChoice) {
    //Take users input and split first lett and rest
    playersChoice = playersChoice[0].toUpperCase() + playersChoice.slice(1).toLowerCase();

    //Return player selection
    return playersChoice;
}
console.log(computerPlay());