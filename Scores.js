var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#back");

//clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var leaderBoard = localStorage.getItem("allScores");
leaderBoard = JSON.parse(leaderBoard);

if (leaderBoard !== null) {

    for (var i = 0; i < leaderBoard.length; i++) {

        var Board = document.createElement("li");
        Board.textContent = leaderBoard[i].initials + " " + leaderBoard[i].score;
        highScore.appendChild(Board);

    }
}
// Event listener to move to index page
back.addEventListener("click", function () {
    window.location.replace("index.html");
});