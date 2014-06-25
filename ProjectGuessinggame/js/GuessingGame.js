
	function isAnswerCorrect(answer) {
	var checkAnswer = -1;
	
	if (answer == 2006)  {
		checkAnswer = 0;
	} else if (answer < 2006) {
		checkAnswer = -1;
	} else if (answer > 2006) {
		checkAnswer = 1;
	}
	return checkAnswer;
}


	var guess, answer, answerCheck, numberOfTries; 
    answer = 2006;
		numberOfTries = 3;
		for (i=0; i<numberOfTries; i++) {
	        guess = prompt("When was the last year Italy won the World Cup?");
        	
			answerCheck = isAnswerCorrect(guess)
			if (answerCheck == 0) {
				break;
			} else {
				alert("That is not correct, you have " + (numberOfTries-(i+1)) + " more tries!");
			}
		}
        if(answerCheck == 0) {
                alert("That is Correct! You Win a large Pizza!");
        } 
        else if (answerCheck == 1)
        {
                alert("They haven't won that recently. Please try playing again!");
        }
        else if (answerCheck == -1)
        {
                alert("Nope, they won more recently than that. Please try playing again");
        }

