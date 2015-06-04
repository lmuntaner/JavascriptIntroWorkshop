createQuestion("Is Jojeen Reed Alive?", ["yes", "no"]);
createQuestion("Who killed Ned Stark?", ["The Hound", "His pride", "Joffrey", "Ilyn Payne"]);
createQuestion("Is Missandei Alive?", ["yes", "no"]);
createQuestion("Is Hodor Alive?", ["yes", "no"]);
createQuestion("Who killed Talisa Stark?", ["Tywin Lannister", "Roose Bolton", "A direwolf", "Walder Frey"]);
createQuestion("Is Ygritte alive?", ["yes", "no"]);
createQuestion("Is Rickon Stark Alive?", ["yes", "no"]);
createQuestion("Who killed Joffrey Baratheon Stark?", ["Varys", "Tyrion Lannister", "His conscious", "Olenna Tyrell"]);


function calculateScore(answers) {
	var correctAnswers = [2, 4, 1, 1, 2, 2, 1, 4];
	var score = 0;

	for (var i = 0; i < answers.length; i++) {
		if (parseInt(answers[i]) === correctAnswers[i]) {
			score += 1;
		}
	}

	var percentageScore = parseInt((score / answers.length) * 100);

	return percentageScore;
}
