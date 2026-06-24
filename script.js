function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let choice = "";

    if(num === 0)  
        choice = "rock";
    else if(num === 1)
        choice = "paper";
    else 
        choice = "scissors";

    return choice;
}

function getHumanChoice() {
    return prompt("Enter your choice (rock/paper/scissors): ", "");
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice.toLowerCase();

        if(humanChoice === computerChoice)
            console.log("It's a tie!");
        else if ((humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);

            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`)

            computerScore++;
        }
    }

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore === computerScore)
        console.log("Ah! The scores are tied.");
    else if(humanScore > computerScore)
        console.log("YAYY! You da real winner.");
    else
        console.log("Son! You have lost.");
    console.log(`Final Scores are ${humanScore}-${computerScore}`);
}

playGame();