let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
let scoreBoard_div = document.querySelector('.score-board');
let result_p = document.querySelector('.result > p');
let rock_div = document.getElementById('rock');
let paper_div = document.getElementById('paper');
let scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    let choices = ['Rock', 'Paper','Scissors'];
   let ranNum =  Math.floor(Math.random() * 3);
   return choices[ranNum];
}

function win(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore.toString();
    result_p.innerHTML = 
    	"<sup class='badge-two'>user</sup> You chose " + userChoice + 
    	"<br/> <sup class='comp-badge-two'>comp</sup> Computer chose " + computerChoice + 
    	"<br/>" + userChoice + " beats " + computerChoice + ". You win!"
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore.toString();
    result_p.innerHTML = 
    	"<sup class='badge-two'>user</sup> You chose " + userChoice + 
    	"<br/> <sup class='comp-badge-two'>comp</sup> Computer chose " + computerChoice +
    	"<br/>" + computerChoice + " beats " + userChoice + ". You lose!"

}

function tie(userChoice, computerChoice) {
    result_p.innerHTML = 
    	"<sup class='badge-two'>user</sup> You chose " + userChoice + 
    	"<br/> <sup class='comp-badge-two'>comp</sup> Computer chose " + computerChoice +
    	"<br/> It's a tie!"

}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case'ScissorsPaper':
            win(userChoice, computerChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case'ScissorsRock':
            lose(userChoice, computerChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case'ScissorsScissors':
            tie(userChoice, computerChoice);
            break;
    }
}

function main() {
    $(document).ready(function () {

        $(rock_div).click(function () {
            game('Rock');
        })

        $(paper_div).click(function () {
            game('Paper');
        })

        $(scissors_div).click(function () {
            game('Scissors');
        })



    })

}

main();





// $(rock_div).click(function () {
//     if (computerChoice === 1){
//         $('.result').replaceWith('<p id="tie">Tie!</p>');
//     }
//     else if (computerChoice === 2){
//         $('.result').replaceWith('<p id="tie">Paper beats Rock. Computer Wins!</p>');
//         computerScore++;
//         computerScore_span.innerHTML = computerScore.toString();
//     }
//     else if (computerChoice === 3){
//         $('.result').replaceWith('<p id="tie">Rock beats Scissors. Players Wins!</p>');
//         userScore++;
//         userScore_span.innerHTML = userScore.toString();
//     }
// });
//
// $(paper_div).click(function () {
//     if (computerChoice === 1){
//         $('.result').replaceWith('<p id="tie">Paper beats Rock. Player Wins!</p>');
//         userScore++;
//         userScore_span.innerHTML = userScore.toString();
//     }
//     else if (computerChoice === 2){
//         $('.result').replaceWith('<p id="tie">Tie!</p>');
//     }
//     else if (computerChoice === 3){
//         $('.result').replaceWith('<p id="tie">Scissors beats Paper. Computer Wins!</p>');
//         computerScore++;
//         computerScore_span.innerHTML = computerScore.toString();
//     }
// });
//
// $(scissors_div).click(function () {
//     if (computerChoice === 1){
//         $('.result').replaceWith('<p id="tie">Rock beats Scissors. Computer Wins!</p>');
//         computerScore++;
//         computerScore_span.innerHTML = computerScore.toString();
//     }
//     else if (computerChoice === 2){
//         $('.result').replaceWith('<p id="tie">Scissors beats Paper. Player Wins!</p>');
//         userScore++;
//         userScore_span.innerHTML = userScore.toString();
//     }
//     else if (computerChoice === 3){
//         $('.result').replaceWith('<p id="tie">Tie!</p>');
//     }
// });