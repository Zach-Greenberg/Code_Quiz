var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["Parentheses", "Curly Brackets", "Quotes", "Square Brackets"],
        answer: "Parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["Numbers and Strings", "Booleans", "Other Arrays", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Console.log", "Terminal/Bash", "For Loops"],
        answer: "Console.log"
    },

];

var score = 0;
var questionIndex = 0;

var clock = document.querySelector("#clock");
var timer = document.querySelector("#begin");
var question = document.querySelector("#question");
var wrapper = document.querySelector("#container");

var penalty = 10;
var clockTime = 80;
var holdInterval = 0;


var newList = document.createElement("ul");


timer.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            clockTime--;
            clock.textContent = "Time: " + clockTime;

            if (clockTime <= 0) {
                clearInterval(holdInterval);
                allDone();
                clock.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});


function render(questionIndex) {

    question.innerHTML = "";
    newList.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {

        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].choices;
        question.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        question.appendChild(newList);
        newList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } else {
            clockTime = clockTime - penalty;
            createDiv.textContent = "Wrong!";
        }

    }

    questionIndex++;

    if (questionIndex >= questions.length) {
        allDone();
        createDiv.textContent = "You got  " + score + " out of " + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    question.appendChild(createDiv);

}
function allDone() {
    question.innerHTML = "";
    clock.innerHTML = "";

    var allDone = document.createElement("h1");
    allDone.setAttribute("id", "allDone");
    allDone.textContent = "All Done!"

    question.appendChild(allDone);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    question.appendChild(createP);

    if (clockTime >= 0) {
        var timeRemaining = clockTime;
        var endScore = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        question.appendChild(endScore);
    }
    var textInitial = document.createElement("label");
    textInitial.setAttribute("id", "textInitial");
    textInitial.textContent = "Enter your initials: ";

    question.appendChild(textInitial);

    var askInitials = document.createElement("input");
    askInitials.setAttribute("type", "text");
    askInitials.setAttribute("id", "initials");
    askInitials.textContent = "";

    question.appendChild(askInitials);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "Submit");
    submitBtn.textContent = "Submit";

    question.appendChild(submitBtn);

    submitBtn.addEventListener("click", function () {
        var initials = askInitials.value;

        if (initials === null) {

            console.log("N/A");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("HighScores.html");
        }
    });

}