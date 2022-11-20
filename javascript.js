// get random computer play 'rock', 'paper', 'scissors'

function getComputerChoice() {
	let compArr = ['rock', 'paper', 'scissors'];
	let compMathRandom = Math.floor(Math.random() * 3);
	let compChoice = compArr[compMathRandom];
	return compChoice;
}

function singleRound(playerSelection, computerSelection) {
	// make sure that user answer is lowerCase

	playerSelection = playerSelection.toLowerCase();

	// possible outcomes of the 1 round of the game

	let tie = "It's a tie!";
	let rockLose = 'You Lose! Paper beats Rock!';
	let rockWin = 'You Won! Rock beats Scissors';
	let scissorsLose = 'You Lose! Rock beats Scissors';
	let scissorsWin = 'You Win! Scissors beats Paper';
	let paperLose = 'You Lose! Scissors beats Paper';
	let paperWin = 'You Win! Paper beats Rock!';

	// determine who win comparison based on user and comp answer

	if (playerSelection === 'rock' && computerSelection === 'paper') {
		return rockLose;
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		return rockWin;
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		return scissorsLose;
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return scissorsWin;
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return paperLose;
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		return paperWin;
	} else {
		return tie;
	}
}

console.log(singleRound('rock', getComputerChoice()));
