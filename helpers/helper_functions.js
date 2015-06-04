(function () {

	if (sessionStorage.getItem("bunny") != "false") {
		welcome_message();	
	}

	var Quiz = function () {
		this.element = document.querySelectorAll(".my-modal")[0];
		this.questions = [];
		this.answers = [];
		this.currentQuestionIndex = 0;
		this.setListener();
	};

	Quiz.prototype.callNextQuestion = function () {
		if (this.currentQuestionIndex < this.questions.length) {
			this.showQuestion(this.currentQuestionIndex);
		} else {
			this.checkAnswers();
		}
	};

	Quiz.prototype.checkAnswers = function () {
		addClass(this.questions[this.questions.length -1], "hidden");
		var quizIntroEl = document.querySelectorAll(".quiz-intro")[0];
		var quizScoreEl = document.querySelectorAll(".quiz-score")[0];
		removeClass(quizScoreEl, "hidden");
		addClass(quizIntroEl, "hidden");
		addClass(this.element, "hidden");
		var percentageScore = calculateScore(this.answers);
		printScore(percentageScore);
	};

	Quiz.prototype.createQuestion = function (questionString, answers) {
		var index = this.questions.length;
		var templateString = document.getElementById("question-template").innerHTML;
		var questionTemplate = _.template(templateString);
		var questionElement = parseHTML(questionTemplate({
			question: questionString,
			answers: answers,
			index: index
		}))[0];
		this.questions.push(questionElement);

		this.element.appendChild(questionElement);

		var formElement = document.getElementById("question-form-" + index);
		formElement.addEventListener("submit", this.sendAnswer.bind(this));
	};

	Quiz.prototype.sendAnswer = function (event) {
		event.preventDefault();
		var radioButtons = event.currentTarget.optionsRadios;
		var answer = -1;
		for (var i = 0; i < radioButtons.length; i++) {
			if (radioButtons[i].checked) {
				answer = radioButtons[i].value;
			}
		}
		this.answers.push(answer);
		this.currentQuestionIndex += 1;
		this.callNextQuestion();
	};

	Quiz.prototype.setListener = function () {
		var startButton = document.getElementById("start-quiz");
		startButton.addEventListener("click", this.startQuiz.bind(this));
	};

	Quiz.prototype.showQuestion = function (index) {
		if (index > 0) {
			addClass(this.questions[index - 1], "hidden");		
		}
		removeClass(this.questions[index], "hidden");
		removeClass(this.questions[index], "hidden-left");
	};

	Quiz.prototype.startQuiz = function () {
		removeClass(this.element, "hidden");
		this.callNextQuestion();
	};

	var quiz = new Quiz();

	window.createQuestion = function (questionString, answers) {
		quiz.createQuestion(questionString, answers);
	};

	function removeClass (element, className) {
		var classes = element.getAttribute("class").split(" ");
		var newClasses = classes.filter(function (classItem) {
			return classItem !== className;
		});
		element.setAttribute("class", newClasses.join(" "));

		return element;
	}

	function addClass (element, className) {
		var classes = element.getAttribute("class").split(" ");
		classes.push(className);
		element.setAttribute("class", classes.join(" "));

		return element;
	}


	var parseHTML = function(str) {
		var tmp = document.implementation.createHTMLDocument();
		tmp.body.innerHTML = str;
		return tmp.body.children;
	};

	window.clearBugsBunny = function () {
		sessionStorage.setItem("bunny", "false");
	};

	window.printScore = function (score) {
		document.getElementById("score-display").text = score + "/100";
	};

	function welcome_message() {
		console.log("	              , ,");
		console.log("                 /| |\\ ");
		console.log("                / | | \\ ");
		console.log("                | | | |     Neeaah, Whats up Doc !?!");
		console.log("                \\ | | /    /");
		console.log("                 \\|w|/    /");
		console.log("                 /_ _\\   /      ,");
		console.log("      /\\       _:()_():_       /]");
		console.log("      ||_     : ._=Y=_  :     / /");
		console.log("     [)(_\\,   ',__\\W/ _,'    /  \\ ");
		console.log("     [) \\_/\\    _/'='\\      /-/\\) ");
		console.log("      [_| \\ \\  ///  \\ '._  / /");
		console.log("      :;   \\ \\///   / |  '` /");
		console.log("      ;::   \\ `|:   : |',_.'");
		console.log('      """    \_|:   : |');
		console.log("               |:   : |''. ");
		console.log("               /`._.'  \\/");
		console.log("              /  /|   /");
		console.log("             |  \\ /  /");
		console.log("              '. '. /");
		console.log("                '. '");
		console.log("                / \\ \\ ");
		console.log("               / / \\'=,");
		console.log("         .----' /   \\ (\\__");
		console.log("    snd (((____/     \\ \\  )");
		console.log("                      '.\\_)");
	};
})();
