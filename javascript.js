
// Computer's Game Choice
function computerPlay() {
    //Randomly select numbers between 1-3
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    //Return random selection
    return computerChoice;
}

console.log(computerPlay());