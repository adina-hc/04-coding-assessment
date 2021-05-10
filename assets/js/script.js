// 0. Select elements
var timeCounter = document.getElementById("timeCounter");
var startBtn = document.getElementById("startBtn");
var goBackBtn = document.getElementById("goBack");
var doneArt = document.getElementById("doneArt");

var questionsSec = document.getElementById("questionsSec");
var optA = document.getElementById("A");
var optB = document.getElementById("B");
var optC = document.getElementById("C");
var startTestSec = document.querySelector("#startTestSec");
var start = document.getElementById("startTestBtn");
var highScoresSec = document.getElementById("highScoresSec");
var testSec = document.querySelector("#testSec");
var endTestSec = document.querySelector("#endTestSec");
var initialsSec = document.querySelector("#initialsSec");
var initials = document.getElementById("initials"); //if used below remove
var initialsBtn = document.getElementById("initialsBtn");
var highScoresSec = document.getElementById("highScoresSec");
var highScoresArray = [];

// 1. Variable declaration
var testScore = 0;
var testTime = 120;
var counter = 0;

// 0. Start Test
function startTest() {
    highScoresSec.setAttribute("style", "display: none");
    currentQuestion = 0;
    countdown();
    testSec.setAttribute("style", "display: block;");
    startTestSec.setAttribute("style", "display: none;");
    populateQuestions();
}
// 2. Questions variables / array
var currentQuestion = 0; // current question
var questions = [
    {
        question: "1. What are the different data types present in javascript",
        optA: "a. var str = 'Hello'; this not is a string",
        optB: "b. var x = 10; cannot be a number",
        optC: "c. string, number, boolean",
        correctAnswer: "c. string, number, boolean"
    },
    {
        question: "2. Hoisting in javascript is?",
        optA: "a. JavaScript's default behavior of moving declarations to the top of the scope",
        optB: "b. Hoisting is the initialization of a variable",
        optC: "c. None of the above",
        correctAnswer: "a. JavaScript's default behavior of moving declarations to the top of the scope"
    },
    {
        question: "3. What is implicit type coercion in javascript?",
        optA: "a. The strict equality operator === triggers implicit type coercion",
        optB: "b. Javascript attemps to coerce an unexpected value type to the expected type",
        optC: "c. Both answers are correct",
        correctAnswer: "b. Javascript attemps to coerce an unexpected value type to the expected type",
    },
    {
        question: "4. What is an Immediately Invoked Function Expression (IIFE)?",
        optA: "a. JavaScript function that runs as soon as it is defined",
        optB: "b. It is a simple way to isolate variable declarations",
        optC: "c. Above answers are correct",
        correctAnswer: "c. Above answers are correct"
    },
    {
        question: "5. A higher order function is:",
        optA: "a. A function or functions that operate on other function or functions, either arguments or returning the functions",
        optB: "b. A function that is placed at the top of the script",
        optC: "c. Above answers are incorrect",
        correctAnswer: "a. A function or functions that operate on other function or functions, either arguments or returning the functions"
    }
]
var lastQuestion = questions.length - 1;
// 3. Populate the questions on the screen and add listeners to the questions 
function populateQuestions() {
    highScoresSec.setAttribute("style", "display:none;");
    var quest = questions[currentQuestion];
    questionItem.innerHTML = "<p>" + questions[currentQuestion].question + "</p>";
    optA.innerHTML = questions[currentQuestion].optA;
    document.getElementById("A").addEventListener("click", evaluateAnswer);
    optB.innerHTML = questions[currentQuestion].optB;
    document.getElementById("B").addEventListener("click", evaluateAnswer);
    optC.innerHTML = questions[currentQuestion].optC;
    document.getElementById("C").addEventListener("click", evaluateAnswer);
}
// 4. Countdown for the test
function countdown() {
    var timerInterval = setInterval(function () {
        testTime--;
        timeCounter.textContent = testTime; //replace query selector by the variable timecounter
        if (testTime < 0 || currentQuestion >= questions.length) {
            clearInterval(timerInterval)
            testSec.setAttribute("style", "display: none;")
            endTestSec.setAttribute("style", "display: block;")
        }
    }, 1000)
}
// 5. Evaluate user's answers
function grade() {
    return userScore = (100 / questions.length) * testScore;
}
function evaluateAnswer(event) {
    console.log(event.target.textContent)
    if (event.target.textContent == questions[currentQuestion].correctAnswer) {
        testScore++;
        // Create a p element to indicate answer result
        var resultAnswer = document.getElementById("confirmation");
        resultAnswer.textContent = "Correct!";
        // Calculate user score for later storage
        grade();
        console.log(userScore);
    }
    else {
        // Create a p element to indicate answer result
        var resultAnswer = document.getElementById("confirmation");
        resultAnswer.textContent = "Incorrect!";
        // timer decreases by 10 seconds
        testTime = testTime - 10;
    }
    // keep populating questions
    currentQuestion++;
    if (currentQuestion < questions.length) {
        populateQuestions();
    }
    else {
        // displays the end test section
        endTestSec.setAttribute("style", "display: block;");
        // displays user score
        var finalScore = document.getElementById("finalScore");
        finalScore.textContent = userScore;
        highScoresSec.setAttribute("style", "display: none");
    }
}
// 6. Declare variables and store initials and score to local
function userResult() {
    // Parse any JSON previously stored in scoresList
    userInitials = document.querySelector("#initials").value;
    var scoresList = JSON.parse(localStorage.getItem("scoresList"));
    if (scoresList == null) scoresList = [];
    localStorage.setItem("finalScore", grade());
    localStorage.setItem("userInitials", userInitials);
    var user = {
        userInitials: localStorage.getItem("userInitials"),
        finalScore: localStorage.getItem("finalScore"),
    }
    localStorage.setItem("user", JSON.stringify(user));
    // Save allEntries back to local storage
    scoresList.push(user);
    localStorage.setItem("scoresList", JSON.stringify(scoresList));
};
var userInitials = "hola";
// 7. Store results and initias into local storage 
initialsBtn.onclick = function (e) { //--> this was missing for the initial display of score
    e.preventDefault();
    highScoresSec.setAttribute("style", "display:block");  
    startTestSec.setAttribute("style", "display:none");   
    console.log("user result" + finalScore)
    endTestSec.setAttribute("style", "display:none");
    userResult();
}

var entries = localStorage.getItem("scoresList");

//Lets count how many we have back
var retrievedObject = JSON.parse(entries);
//Sort by score
if (retrievedObject != null) {
    retrievedObject.sort(function (a, b) {
        var keyA = new Date(a.finalScore),
            keyB = new Date(b.finalScore);
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
    });
    // Display list of users who took the test 
    for (let i = 0; i < retrievedObject.length; i++) {
        // Display entries of those users
        var listFinalScore = document.createElement("li");
        listFinalScore.textContent = (i + 1) + ". " + retrievedObject[i].userInitials + " -> " + retrievedObject[i].finalScore;
        var listScores = document.querySelector("#listScores");
        listScores.appendChild(listFinalScore); 
        console.log(listFinalScore.context); // remove when done
    }
}

// 8. Clear high scores
clearScores.onclick = function(event) {
    event.preventDefault;
    localStorage.clear();
    location.reload();
}


// 9. Go back
goBackBtn.onclick = function (event) {
    event.preventDefault;
    startTestSec.setAttribute("style", "display:block");
    highScoresSec.setAttribute("style", "display:none");
    endTestSec.setAttribute("style", "display:none");
};

// 10. View High Scores from the Header
var viewHSEl = document.querySelector("#viewHSSecBtn");
viewHSEl.onclick = function viewHS () {
    startTestSec.setAttribute("style", "display:none");
    highScoresSec.setAttribute("style", "display:block");
    endTestSec.setAttribute("style", "display:none");
}

startBtn.addEventListener("click", startTest);



