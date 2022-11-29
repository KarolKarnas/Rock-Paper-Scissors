// Queries

let resultPhrase = document.querySelector('#resultPhrase');
let compChoicePrint = document.querySelector('#compChoice');
let userChoicePrint = document.querySelector('#userChoice');
let compScorePrint = document.querySelector('#compScore');
let userScorePrint = document.querySelector('#userScore');
let wonMessage = document.querySelector('#wonMessage');

// get random computer choice 'rock', 'paper', 'scissors'

function getComputerChoice() {
	let compArr = ['rock', 'paper', 'scissors'];
	let compMathRandom = Math.floor(Math.random() * 3);
	let compChoice = compArr[compMathRandom];
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

let tie = "It's a tie! NO ONE get scored! Try again!";
let rockLose = 'You Lose! Paper beats Rock!';
let rockWin = 'You Won! Rock beats Scissors';
let scissorsLose = 'You Lose! Rock beats Scissors';
let scissorsWin = 'You Win! Scissors beats Paper';
let paperLose = 'You Lose! Scissors beats Paper';
let paperWin = 'You Win! Paper beats Rock!';
let compWon = 'Motherfucking COMP won!';
let userWon = 'You WON!';

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
