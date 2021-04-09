// 0. Select elements
var countTime = document.getElementById("countTime");
var timeBar = document.getElementById("timeBar");
var progBar = document.getElementById("progBar");

var startBtn = document.getElementById("startBtn");
var goBackBtn = document.getElementById("goBack");
var doneArt = document.getElementById("done");

var question = document.getElementById("questions");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");

var startAssessment = document.querySelector("#startAssessment");
var instructions = document.querySelector(".instructions");
var start = document.getElementById("startTestBtn");
var highScoresEl = document.getElementById("highScoresSec");

var assessment = document.querySelector("#assessment");
var endTest = document.querySelector("#endTest")

var initials = document.getElementById("initials");
var initialsBtn = document.getElementById("initialsBtn");

var maxListHighScores = 10;

// 1. Variable declaration
var testScore= 0;
var testTime = 180;
var counter = 0;

// 0. Start Test
function startTest() {
    currentQuestion = 0;
    countdown();
    document.querySelector("#assessment").setAttribute("style", "display: block;");
    document.querySelector("#startAssessment").setAttribute("style", "display: none;");
    populateQuestions();
}

// 2. Questions variables / array
var currentQuestion = 0; // current question
var questions = [
    {
        question: "1. What are the different data types present in javascript",
        optionA: "a. var str = 'Hello'; this not is a string",
        optionB: "b. var x = 10; cannot be a number",
        optionC: "c. string, number, boolean",
        correctAnswer: "c. string, number, boolean"
    },
    {
        question: "2. Hoisting in javascript is?",
        optionA: "a. JavaScript's default behavior of moving declarations to the top of the scope",
        optionB: "b. Hoisting is the initialization of a variable",
        optionC: "c. None of the above",
        correctAnswer: "a. JavaScript's default behavior of moving declarations to the top of the scope"
    },
    {
        question: "3. What is implicit type coercion in javascript?",
        optionA: "a. The strict equality operator === triggers implicit type coercion",
        optionB: "b. Javascript attemps to coerce an unexpected value type to the expected type",
        optionC: "c. Both answers are correct",
        correctAnswer: "b. Javascript attemps to coerce an unexpected value type to the expected type",
    },
    {
        question: "4. What is an Immediately Invoked Function Expression (IIFE)?",
        optionA: "a. JavaScript function that runs as soon as it is defined",
        optionB: "b. IT is a simple way to isolate variable declarations",
        optionC: "c. Above answers are correct",
        correctAnswer: "c. Above answers are correct"
    },
    {
        question: "5. A higher order function is:",
        optionA: "a. A function or functions that operate on other function or functions, either arguments or returning the functions",
        optionB: "b. A function that is placed at the top of the script",
        optionC: "c. Above answers are incorrect",
        correctAnswer: "a. A function or functions that operate on other function or functions, either arguments or returning the functions"
    }
]
var lastQuestion = questions.length - 1;

// 3. Populate the questions on the screen and add listeners to the questions 

function populateQuestions() {
    var quest = questions[currentQuestion];
    questionItem.innerHTML = "<p>" + questions[currentQuestion].question + "</p>";
    optionA.innerHTML = questions[currentQuestion].optionA;
    document.getElementById("A").addEventListener("click", evaluateAnswer);
    optionB.innerHTML = questions[currentQuestion].optionB;
    document.getElementById("B").addEventListener("click", evaluateAnswer);
    optionC.innerHTML = questions[currentQuestion].optionC;
    document.getElementById("C").addEventListener("click", evaluateAnswer);
} 

// 4. Countdown for the test
function countdown(){
    var timerInterval = setInterval(function(){
        testTime--; 
        document.querySelector("#timeCounter").textContent = testTime;
        if (testTime <= 0 || currentQuestion >= questions.length) {
            clearInterval(timerInterval)
            assessment.setAttribute("style", "display: none;")
            endTest.setAttribute("style", "display: block;")
        }
    }, 1000)
}

// 5. Evaluate user's answers

userScore = (100 / questions.length) * testScore;    

function evaluateAnswer(event) {
    console.log(event.target.textContent)
    if ( event.target.textContent == questions[currentQuestion].correctAnswer) {
        testScore ++;
        // Create a p element to indicate answer result
        var resultAnswer = document.getElementById("confirmation");
        resultAnswer.textContent = "Correct!";    
        // Calculate user score for later storage
        userScore = (100 / questions.length) * testScore;  
        
        console.log(userScore);                    
    }
    else {
        // Create a p element to indicate answer result
        var resultAnswer = document.getElementById("confirmation");
        resultAnswer.textContent = "Incorrect!";
        // timer decreases by 10 seconds
        testTime = testTime - 10;
    }
    // keep populating questions until the last question is answered
    currentQuestion ++;
    if (currentQuestion < questions.length) {
        populateQuestions();
        }
    else {
        endTest.setAttribute("style", "display: block;");
        var finalScore = document.getElementById("finalScore");
        finalScore.textContent = userScore;  
    }
}

// 6. Declare variables and store initials and score to local
var highScoresArray = [];
var initials = document.querySelector("#initials");

initialsBtn.addEventListener("click", recordInitials());
// adding event to button ** remove from here if it does not work
//document.getElementById("initialsBtn").addEventListener('click', recordInitials);
 function recordInitials() {
    //prevent refresh 
    function dontRefresh(event){
    event.preventDefault();
    }
    //endTest.setAttribute("style", "display:none;");
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var scoresText = initials.value + ".- " + testScore + " points " + testTime + " seconds.";
    highScoresArray.push(scoresText);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    document.querySelector("#listScores").textContent = localStorage.getItem("highScores");
    highScoresEl.setAttribute("style", "display: block;");
    
}


// 7. Clear high scores
function clearStorage(){
    localStorage.clear();
}

// 8. Go back
goBackBtn.onclick = function(){
    startAssessment.setAttribute("style","display:block");
    highScoresEl.setAttribute("style","display:none");
    endTest.setAttribute("style","display:none");
};

// 9. Exit Quiz
function exitQuiz() {
    document.querySelector("#assessment").setAttribute("style", "display: none;")
    document.querySelector("#startAssessment").setAttribute("style", "display: none;")    
    document.querySelector("#exitTest").setAttribute("style", "display: block;")
}

startBtn.addEventListener("click", startTest);
initialsBtn.addEventListener("click", recordInitials);
goBackBtn.addEventListener("click", goBack);
clearScores.addEventListener("click", clearStorage);
