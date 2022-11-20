// get random computer choice 'rock', 'paper', 'scissors'

function getComputerChoice() {
	let compArr = ['rock', 'paper', 'scissors'];
	let compMathRandom = Math.floor(Math.random() * 3);
	let compChoice = compArr[compMathRandom];
	console.log(`COMP: ${compChoice}`);
	return compChoice;
}

// get the player choice

function getPlayerChoice() {
	let userChoice = prompt(
		'Type your favorite weapon: rock, paper or scissors'
	).toLowerCase();

	//try to call again function if the userChoice is different than
	// 'rock' or 'paper' or 'scissors'
	// the problem it always returns all the values and generate the tie, probably undefined value

	// if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
	// 	alert('You write something wrong, try again');
	// 	getPlayerChoice();
	// }

	console.log(`USER: ${userChoice}`);
	return userChoice;
}

// variables with possible outcomes of the 1 round of the game
// removed from singleRound function for scope of

let tie = "It's a tie!";
let rockLose = 'You Lose! Paper beats Rock!';
let rockWin = 'You Won! Rock beats Scissors';
let scissorsLose = 'You Lose! Rock beats Scissors';
let scissorsWin = 'You Win! Scissors beats Paper';
let paperLose = 'You Lose! Scissors beats Paper';
let paperWin = 'You Win! Paper beats Rock!';

// single round evaluation

function playRound(playerSelection, computerSelection) {
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

// perform 5 times single round function

function game() {
	// store score variables of the game
	let userScore = 0;
	let compScore = 0;
	// possible finish game strings
	let userWinGame = 'You win the game! Congratulations!';
	let compWinGame = 'You lose the game! You are weak! Try again';
	let tieGame = 'It is a tie! Try again!!!';

	for (let i = 0; i < 5; i++) {
		let resultSingleRound = playRound(getPlayerChoice(), getComputerChoice());
		if (
			resultSingleRound === rockWin ||
			resultSingleRound === scissorsWin ||
			resultSingleRound === paperWin
		) {
			userScore++;
		} else if (
			resultSingleRound === rockLose ||
			resultSingleRound === scissorsLose ||
			resultSingleRound === paperLose
		) {
			compScore++;
		}
		console.log(`This round result: ${resultSingleRound}`);
		console.log(`Total score, USER: ${userScore} COMP: ${compScore}`);
	}

	//final score evaluation

	if (userScore > compScore) {
		console.log(userWinGame);
	} else if (userScore < compScore) {
		console.log(compWinGame);
	} else {
		console.log(tieGame);
	}
}

game();

// console.log(singleRound('rock', getComputerChoice()));
