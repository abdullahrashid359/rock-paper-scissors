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
    let computerScore = 0;
    let humanScore = 0;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) =>
        button.addEventListener("click", playRound));

    const result = document.querySelector(".result");
    const runningScore = document.createElement("p");

    runningScore.textContent = `You ${humanScore}-${computerScore} Computer`;
    result.appendChild(runningScore);

    function playRound(event) {
        let humanChoice = event.target.textContent;
        humanChoice = humanChoice.toLowerCase();
        const computerChoice = getComputerChoice();
        
        const para = document.createElement("p");
        

        if(humanChoice === computerChoice)
            para.textContent = "It's a tie!";
        else if ((humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")) {
            para.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;

            humanScore++;
        }
        else {
            para.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;

            computerScore++;
        }
        
        result.appendChild(para);
        runningScore.textContent = `You ${humanScore}-${computerScore} Computer`;

        if(humanScore === 5 || computerScore === 5) {
            buttons.forEach(button => button.remove());
            result.textContent = "";

            const heading = document.createElement("h1");
            heading.textContent = "Final Score";
            result.appendChild(heading);

            const finalScore = document.createElement("p");
            finalScore.textContent = `You ${humanScore}-${computerScore} Computer`;
            result.appendChild(finalScore);

            const winner = document.createElement("p");
            if (humanScore === 5)
                winner.textContent = "YAYY! You da real winner.";
            else
                winner.textContent = "Son! You have lost.";

            result.appendChild(winner);
        }
    }

    

