// Queries

const resultPhrase = document.querySelector('#resultPhrase');
const compChoicePrint = document.querySelector('#compChoice');
const userChoicePrint = document.querySelector('#userChoice');
const compScorePrint = document.querySelector('#compScore');
const userScorePrint = document.querySelector('#userScore');
const wonMessage = document.querySelector('#wonMessage');

// get random computer choice 'rock', 'paper', 'scissors'

const compArr = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
	const compMathRandom = Math.floor(Math.random() * 3);
	const compChoice = compArr[compMathRandom];
	compChoicePrint.textContent = compChoice;
	return compChoice;
}

// get the player choice

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		let userChoice = button.id;
		userChoicePrint.textContent = userChoice;
		playRound(userChoice, getComputerChoice());
	});
});

//messages

const tie = "It's a tie! NO ONE get scored! Try again!";
const rockLose = 'You Lose! Paper beats Rock!';
const rockWin = 'You Won! Rock beats Scissors';
const scissorsLose = 'You Lose! Rock beats Scissors';
const scissorsWin = 'You Win! Scissors beats Paper';
const paperLose = 'You Lose! Scissors beats Paper';
const paperWin = 'You Win! Paper beats Rock!';
const compWon = 'Motherfucking COMP won!';
const userWon = 'You WON!';

// score counters

let userScore = 0;
let compScore = 0;

// main game function

function playRound(playerSelection, computerSelection) {
	//reset after game

	wonMessage.textContent = '';
	compScorePrint.classList.remove('green', 'red');
	userScorePrint.classList.remove('red', 'green');

	//single round evaluation, update counters

	if (playerSelection === 'rock' && computerSelection === 'paper') {
		resultPhrase.textContent = rockLose;
		compScore++;
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		resultPhrase.textContent = rockWin;
		userScore++;
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		resultPhrase.textContent = scissorsLose;
		compScore++;
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		resultPhrase.textContent = scissorsWin;
		userScore++;
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		resultPhrase.textContent = paperLose;
		compScore++;
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		resultPhrase.textContent = paperWin;
		userScore++;
	} else {
		resultPhrase.textContent = tie;
	}

	// running score

	compScorePrint.textContent = compScore;
	userScorePrint.textContent = userScore;

	//game winner score evaluation

	if (compScore === 5) {
		wonMessage.textContent = `You lose the game! You are weak! Try again`;
		wonMessage.classList.add('red');
		compScorePrint.classList.add('green');
		userScorePrint.classList.add('red');
		userScore = 0;
		compScore = 0;
	} else if (userScore === 5) {
		wonMessage.textContent = `You win the game! Congratulations!`;
		wonMessage.classList.add('green');
		compScorePrint.classList.add('red');
		userScorePrint.classList.add('green');
		userScore = 0;
		compScore = 0;
	}
}
