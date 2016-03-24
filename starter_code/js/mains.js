var computerChoice;

// Generates random computer choice
function computerPlay() {
  var randomNum = getRandomInt(0, 2);
  var choices = ["rock", "paper", "scissors"];
  
  computerChoice = choices[randomNum];
}

// Generates random number from range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame(randomNum, choices){
	if (choices===1){
		if (randomNum===2) {
			$(".result").text("You Lose. Computer picked Paper!")
		}
		if (randomNum === 3) {
			$(".result").text("You Win. Computer picked Scissors!")
		}
	}
	if else(choices === 2)
		{if (randomNum === 1) {
			$(".result").text("You Win. Computer picked Rock!")
		}
		if (randomNum === 3) {
			$(".result").text("You Lose. Computer picked Scissors!")
		}
	}
	

	if else(choices===3)
		{if (randomNum===1){
			$(".result").text("You Lose. Computer picked Rock!")
		}
		if (randomNum===2) {
			$(".result").text("You Win. Computer picked Paper!")
		}
	}

	else {
			$(".result").text("Draw. Computer picked same one!")
		}

$(".play-button").click(playGame);
	console.log(hello);

}

// Demonstration of how to generate random computer choice.
computerPlay();
console.log(computerChoice);