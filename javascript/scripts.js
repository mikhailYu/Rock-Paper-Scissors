
game()

function game() {
    let playerScore = 0
    let computerScore = 0

        playRound()
        console.log("Player: " + (playerScore) + " Computer: " + (computerScore));
        playRound()
        console.log("Player: " + (playerScore) + " Computer: " + (computerScore));
        playRound()
        console.log("Player: " + (playerScore) + " Computer: " + (computerScore));
        playRound()
        console.log("Player: " + (playerScore) + " Computer: " + (computerScore));
        playRound()
        console.log("Player: " + (playerScore) + " Computer: " + (computerScore));
    
        if (playerScore == computerScore) {
            alert("Its a tie!");
        } else if (playerScore > computerScore) {
            alert("You win! " + "Player: " + (playerScore) + " Computer: " + (computerScore));
        } else { 
            alert("you have lost... " + "Player: " + (playerScore) + " Computer: " + (computerScore));
        }

    

/* starts the round. takes the player and computer choices and decides winner (or tie)*/
function playRound() {
   
    let computerChoice = computerPlay();
    let playerChoice = playerSelection();
    let roundResult
    console.log((computerChoice) + " vs " + (playerChoice));

    if ((computerChoice === 'Rock' && playerChoice === 'Rock')
     || (computerChoice === 'Paper' && playerChoice === 'Paper')
     || (computerChoice === 'Scissors' && playerChoice === 'Scissors')) {

    console.log("TIE");
    return roundResult ;
 }
 else if ((computerChoice === 'Rock' && playerChoice === 'Scissors')
      || (computerChoice === 'Paper' && playerChoice === 'Rock')
      || (computerChoice === 'Scissors' && playerChoice === 'Paper')) {

    console.log("YOU LOSE! " + (computerChoice) + " beats " + (playerChoice)+ "!");
    ++computerScore;
    return roundResult ;
}
 else if ((computerChoice === 'Rock' && playerChoice === 'Paper')
      || (computerChoice === 'Paper' && playerChoice === 'Scissors')
      || (computerChoice === 'Scissors' && playerChoice === 'Rock')) {

    console.log("YOU WIN! " + (playerChoice) + " beats " + (computerChoice)+ "!");
    roundResult = "win";
    ++playerScore;
    return roundResult ;
}
else {
    console.log("unknown command... you lose");
    ++computerScore;
    return roundResult ;
}

}
/* random number generator to decide what the computer plays */

function computerPlay() {
let cpuIntGen = Math.floor((Math.random())*3)+1;
let cpuChoice  

if (cpuIntGen == 1) {
    
    cpuChoice = "Rock";
} else if (cpuIntGen == 2) {
    cpuChoice = "Paper";
} else {
    cpuChoice = "Scissors";
}
console.log("Computer has chosen " + (cpuChoice) + " " + "(int " + (cpuIntGen) + ")"); 
return cpuChoice;
}

/* player selection, converts to lower case */ 

function playerSelection() {
    let playerInput = (prompt("Choose rock, paper or scissors...")).toLowerCase();
    
    playerPrompt = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    console.log ("Player has chosen " + (playerPrompt));
    if (playerPrompt === ('Rock')|| playerPrompt === ('Paper')|| playerPrompt === ('Scissors')) {
        return playerPrompt
    } else {
        console.log("please input a valid choice");
        return playerPrompt
    }
}

}



