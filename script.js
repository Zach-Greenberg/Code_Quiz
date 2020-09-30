$(document).ready(function(){

    var questions = [
        {
            questionNumber: 1,
            questionText: "Commonly used data types DO NOT include:",
            answers: [{
              answerNumber: 1,
              answerText: 'Strings',
              answerCorrect: false
            },
            {
              answerNumber: 2,
              answerText: 'Booleans',
              answerCorrect: false
            },
            {
              answerNumber: 3,
              answerText: "Alerts",
              answerCorrect: true
            },
            {
              answerNumber: 4,
              answerText: 'Numbers',
              answerCorrect: false
            }],
        },
        {
            questionNumber: 2,
            questionText: "The condition in an if/else statement is enclosed within ____.",
            answers: [{
              answerNumber: 1,
              answerText: 'Parentheses',
              answerCorrect: true
            },
            {
              answerNumber: 2,
              answerText: 'Curly Brackets',
              answerCorrect: false
            },
            {
              answerNumber: 3,
              answerText: "Quotes",
              answerCorrect: false
            },
            {
              answerNumber: 4,
              answerText: 'Square Brackets',
              answerCorrect: false
            }],
        },
        {
            questionNumber: 3,
            questionText: "Arrays in JavaScript can be used to store ____.",
            answers: [{
              answerNumber: 1,
              answerText: 'Numbers and Strings',
              answerCorrect: false
            },
            {
              answerNumber: 2,
              answerText: 'Booleans',
              answerCorrect: false
            },
            {
              answerNumber: 3,
              answerText: "Other Arrays",
              answerCorrect: false
            },
            {
              answerNumber: 4,
              answerText: 'All of the above',
              answerCorrect: true
            }],
        },
        {
            questionNumber: 4,
            questionText: "String values must be enclosed within ____ when being assigned to variables.",
            answers: [{
              answerNumber: 1,
              answerText: 'Commas',
              answerCorrect: false
            },
            {
              answerNumber: 2,
              answerText: 'Curlry Brackets',
              answerCorrect: false
            },
            {
              answerNumber: 3,
              answerText: "Quotes",
              answerCorrect: true
            },
            {
              answerNumber: 4,
              answerText: 'Parenthesis',
              answerCorrect: false
            }],
        },
        {
            questionNumber: 5,
            questionText: "A very useful tool to use during development and debugging for printing content to the debugger is:",
            answers: [{
              answerNumber: 1,
              answerText: 'JavaScript',
              answerCorrect: false
            },
            {
              answerNumber: 2,
              answerText: 'Console Log',
              answerCorrect: true
            },
            {
              answerNumber: 3,
              answerText: "Terminal/Bash",
              answerCorrect: false
            },
            {
              answerNumber: 4,
              answerText: 'For Loops',
              answerCorrect: false
            }],
        }
    ];
var score = 0;
var questionIndex = 0;

var clock = document.querySelector("#Time");
var begin = document.querySelector("#begin");
var question = document.querySelector("#questionsDiv");
var container = document.querySelector("#container");

var penalty = 10;
var clockTime = 80;
var timeStop = 0;

// make a list for the answer choices
var options = document.createElement("ul");

// start the quiz
begin.addEventListener("click", function () {
    if (timeStop === 0) {
        timeStop = setInterval(function () {
            clockTime--;
            clock.textContent = "Time remaining: " + clockTime;

            if (secondsLeft === 0) {
                clearInterval(timeStop);
                allDone();
                clock.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});



})