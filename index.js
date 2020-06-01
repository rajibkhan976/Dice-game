document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
	//variables for manipulating DOM
	var userInput = document.getElementById("dice-input-number");
	var submitButton = document.getElementById("submit-button");
	var resetButton = document.getElementById("reset-button");
	var errorMessage = document.getElementById("error-message");
	var diceNumber = document.getElementById("dice-output-number");
	var diceScore = document.getElementById("dice-score");
	var diceExceptionalScore = document.getElementById("dice-exceptional-score");
	var diceExtra = document.getElementById("dice-extra-number");
	var finalResult = document.getElementById("final-result");
	//method for input error handling
	function inputManager () {
		var userInputVal = userInput.value;
		if (userInputVal < 1) {
			errorMessage.innerHTML = "Du f&aring;r inte ange mindre &auml;n 1";
		} else if (userInputVal > 5) {
			errorMessage.innerHTML = "Du f&aring;r inte ange större &auml;n 5";
		} else {
			gameManager(userInputVal);
			errorMessage.innerHTML = "";
		}
	}
	//method for controlling the game logic
	function gameManager (userInput) {
		var totatPoint = 0;
		var min = Math.ceil(1);
		var max = Math.floor(6);
		var score = 0;
		var i = 1;
		window.setInterval(function () {
			if (i <= userInput) {
			score = Math.floor(Math.random() * (max - min + 1)) + min;
			if (score < 6) {
				diceExceptionalScore.innerHTML = "",
				diceExtra.innerHTML = "";
				diceNumber.innerHTML = `T&auml;rning nummer: ${i}`;
				diceScore.innerHTML = `Po&auml;ng: ${score}`;
				totatPoint += score;
				finalResult.innerHTML = `Summa po&auml;ng: ${totatPoint}`;
				i++;
			} else {
				diceExceptionalScore.innerHTML = "T&auml;rningen sl&aring;s 6",
				diceExtra.innerHTML = "Du f&aring;r 2 stycken extra T&auml;rningar";
				i -= 2;
			}
		}
		}, 2000, totatPoint, min, max, score, i);
	}
	//method for starting the game again
	function replayGame() {
		userInput.value = "";
		errorMessage.innerHTML = "";
		diceExceptionalScore.innerHTML = "",
		diceExtra.innerHTML = "";
		diceNumber.innerHTML = ``;
		diceScore.innerHTML = ``;
		finalResult.innerHTML = "";
	}
	//adding click events to the buttons
	submitButton.addEventListener("click", inputManager, false);
	resetButton.addEventListener("click", replayGame, false);
  }
}
