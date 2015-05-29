createQuestion("Are you wearing shoes?", ["yes", "no"]);
createQuestion("Do you like donuts?", ["yes", "no"]);
createQuestion("What sports do you like?", ["hockey", "football", "beer pong", "table tennis"]);

var setAndPrintScore = function (answers) {
	var score = 0;
	debugger;
	if (answers[0] == 1) {
		score = score + 1;
	}

	if (answers[1] == 0) {
		score = score + 1;
	}

	printScore(score);
}