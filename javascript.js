function getComputerChoice () {
let compArr = ['Rock', 'Paper', 'Scissors'];
let compMathRandom = Math.floor(Math.random() * 3);
let compChoice = compArr[compMathRandom];
return compChoice;
}

console.log(getComputerChoice());
