createQuestion("say something", ["on answer", "another one"]);
createQuestion("say something different", ["third answer", "fourth answer"]);

var setAndPrintScore = function (answers) {
	var score = 0;

	if (answers[0] == 1) {
		score = score + 1;
	}

	if (answers[1] == 0) {
		score = score + 1;
	}

	printScore(score);
}