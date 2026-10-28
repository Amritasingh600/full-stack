const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const target = Math.floor(Math.random() * 100) + 1;
let triesLeft = 7;

console.log("Guess the number between 1 and 100.");
console.log("You have 7 tries.");

function askGuess() {
	if (triesLeft === 0) {
		console.log(`Out of tries. The number was ${target}.`);
		rl.close();
		return;
	}

	rl.question(`Enter your guess (${triesLeft} tries left): `, (input) => {
		const guess = Number(input);

		if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
			console.log("Please enter a whole number from 1 to 100.");
			askGuess();
			return;
		}

		triesLeft--;

		if (guess === target) {
			console.log("Correct! You guessed the number.");
			rl.close();
			return;
		}

		if (guess < target) {
			console.log("Too low.");
		} else {
			console.log("Too high.");
		}

		askGuess();
	});
}

askGuess();
