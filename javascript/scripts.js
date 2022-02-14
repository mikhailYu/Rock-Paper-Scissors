let btnRock= document.querySelector('.btnRock');
let btnPaper= document.querySelector('.btnPaper');
let btnScissors= document.querySelector('.btnScissors');

let playerScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector('.result');
const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'CHOOSE:';
resultDiv.appendChild(content);

const scoreSheet = document.querySelector('.scoreSheet');
const playerScoreLog = document.createElement('p');
playerScoreLog.classList.add('content');
playerScoreLog.textContent = 'Player Score: ' + playerScore;
scoreSheet.appendChild(playerScoreLog);

const computerScoreLog = document.createElement('p');
computerScoreLog.classList.add('content');
computerScoreLog.textContent = 'Computer Score: ' + computerScore;
scoreSheet.appendChild(computerScoreLog);

/* player selection */ 
playerSelection()


let playerChoice;
function playerSelection() {
    
    btnRock.addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        playerChoice = "Rock"; 
        playRound();  
    })
    btnPaper.addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        playerChoice = "Paper";   
        playRound();
    })
    btnScissors.addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        playerChoice = "Scissors";  
        playRound();
    })
     
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
    console.log("COMPUTER HAS CHOSEN " + cpuChoice); 
    return cpuChoice;
    }
    
    
function playRound() {

    let computerChoice = computerPlay();

        console.log((computerChoice) + " vs " + (playerChoice));
        if (playerScore >= 5 || computerScore >= 5){
            return
        } else if((computerChoice === 'Rock' && playerChoice === 'Rock')
         || (computerChoice === 'Paper' && playerChoice === 'Paper')
         || (computerChoice === 'Scissors' && playerChoice === 'Scissors')) {
    
        content.textContent = 'TIE';;
        scoreLog ();
            }
            else if ((computerChoice === 'Rock' && playerChoice === 'Scissors')
                || (computerChoice === 'Paper' && playerChoice === 'Rock')
                || (computerChoice === 'Scissors' && playerChoice === 'Paper')) {
            
                content.textContent = ("YOU LOSE! " + (computerChoice) + " beats " + (playerChoice)+ "!");
                ++computerScore;
                scoreLog ();
            }
            else if ((computerChoice === 'Rock' && playerChoice === 'Paper')
                || (computerChoice === 'Paper' && playerChoice === 'Scissors')
                || (computerChoice === 'Scissors' && playerChoice === 'Rock')) {
            
                content.textContent = ("YOU WIN! " + (playerChoice) + " beats " + (computerChoice)+ "!");
                roundResult = "win";
                ++playerScore;
                scoreLog ();
            }
            else {
                content.textContent= ("unknown command... you lose");
                ++computerScore;
                scoreLog ();
            }
}

function scoreLog () {
   if (playerScore < 5 && computerScore < 5){
    playerScoreLog.textContent = 'Player Score: ' + playerScore;
    computerScoreLog.textContent = 'Computer Score: ' + computerScore;
       playerSelection();
    } else if (playerScore > computerScore) {
        
        playerScoreLog.textContent = 'Player Score: ' + playerScore;
        computerScoreLog.textContent = 'Computer Score: ' + computerScore;
        content.textContent=("You win!");
    } else { 
        content.textContent=("you have lost..." );
        playerScoreLog.textContent = 'Player Score: ' + playerScore;
        computerScoreLog.textContent = 'Computer Score: ' + computerScore;
        
    }

}