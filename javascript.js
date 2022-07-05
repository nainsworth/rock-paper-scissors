
// Computer's Game Choice
function computerPlay() {
    //Randomly select numbers between 1-3
    const computerChoice = Math.floor(Math.random() * 3) + 1;

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
