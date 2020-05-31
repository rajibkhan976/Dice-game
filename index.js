document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
	var userInput = document.getElementById("dice-number");
	var submitButton = document.getElementById("submit-button");
	var resetButton = document.getElementById("reset-button");
	var errorMessage = document.getElementById("error-message");
	var diceNumber = document.getElementById("dice-number");
	var diceScore = document.getElementById("dice-score");
	var finalResult = document.getElementById("final-result");

	function inputManager () {
		var userInputVal = userInput.value;
		if (userInputVal < 1) {
			errorMessage.innerHTML = "You cannot enter less than 1";
		} else if (userInputVal > 5) {
			errorMessage.innerHTML = "You cannot enter greater than 5";
		} else {
			finalResult.innerHTML = gameManager(userInputVal);
			errorMessage.innerHTML = "";
		}
	}
	
	function gameManager (userInput) {
		var totatPoint = 0;
		var min = Math.ceil(1);
		var max = Math.floor(6);
		var score = 0;
		for (var i = 0; i < userInput; i++) {
			score = Math.floor(Math.random() * (max - min + 1)) + min;
			if (score < 6) {
				diceNumber.innerHTML = `Dice number: ${i}`;
				diceScore.innerHTML = `Dice scored: ${score}`;
				console.log(score);
				totatPoint += score;
			} else {
				console.log(score);
				i -= 2;
			}
		}
		return `Result: ${totatPoint}`;
	}
	
	function replayGame() {
		userInput.value = "";
		errorMessage.innerHTML = "";
		diceNumber.innerHTML = ``;
		diceScore.innerHTML = ``;
		finalResult.innerHTML = "";
	}
	
	submitButton.addEventListener("click", inputManager, false);
	resetButton.addEventListener("click", replayGame, false);
  }
}
