// 0. Select elements
var countTime = document.getElementById("countTime");
var timeBar = document.getElementById("timeBar");
var progBar = document.getElementById("progBar");

var startBtn = document.getElementById("startBtn");
var quitTest = document.getElementById("quitBtn");

var question = document.getElementById("questions");

var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");

var startAssessment = document.querySelector("#startAssessment");
var instructions = document.querySelector(".instructions");
var start = document.getElementById("startTestBtn");

var initials = document.getElementById("initials");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
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
        optionA: "a. var str = 'Hello'; this is a string",
        optionB: "b. var x = 10; ",
        optionC: "c. string, number, boolean",
        correctAnswer: "string, number, boolean"
    },
    {
        question: "2. Hoisting in javascript is?",
        optionA: "a. JavaScript's default behavior of moving declarations to the top of the scope",
        optionB: "b. Hoisting is the initialization of a variable",
        optionC: "c. None of the above",
        correctAnswer: "JavaScript's default behavior of moving declarations to the top of the scope"
    },
    {
        question: "3. What is implicit type coercion in javascript?",
        optionA: "a. The strict equality operator === triggers implicit type coercion",
        optionB: "b. Javascript attemps to coerce an unexpected value type to the expected type",
        optionC: "c. Both answers are correct",
        correctAnswer: "Javascript attemps to coerce an unexpected value type to the expected type",
    },
    {
        question: "4. What is an Immediately Invoked Function Expression (IIFE)?",
        optionA: "a. JavaScript function that runs as soon as it is defined",
        optionB: "b. IT is a simple way to isolate variable declarations",
        optionC: "c. Above answers are correct",
        correctAnswer: "Above answers are correct"
    },
    {
        question: "5. A higher order function is:",
        optionA: "a. A function or functions that operate on other function or functions, either arguments or returning the functions",
        optionB: "b. A function that is placed at the top of the script",
        optionC: "c. Above answers are incorrect",
        correctAnswer: "A function or functions that operate on other function or functions, either arguments or returning the functions"
    }
]
var lastQuestion = questions.length - 1;

// 3. Populate the questions on the screen and add listeners to the questions
function populateQuestions() {
    var quest = questions[currentQuestion];
    questionItem.innerHTML = "<p>" + questions[currentQuestion].question + "</p>";
    optionA.innerHTML = questions[currentQuestion].optionA;
    document.getElementById("A").addEventListener("click", (event)=>{ 
        var answer = event.target.value;
        window.alert(answer);
        evaluateAnswer(answer);
    });
    optionB.innerHTML = questions[currentQuestion].optionB;
    document.getElementById("B").addEventListener("click", (event)=>{ 
        var answer = event.target.value;
        window.alert(answer);
        evaluateAnswer(answer);
    });
    optionC.innerHTML = questions[currentQuestion].optionC;
    document.getElementById("C").addEventListener("click", (event)=>{ 
        var answer = event.target.value;
        window.alert(answer);
        evaluateAnswer(answer);
    });
}

// 4. Starts countdown
function countdown(){
    var timerInterval = setInterval(function(){
        testTime--;
        document.querySelector("#timeCounter").textContent = testTime;
        if (testTime <= 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}

// 5. Evaluate user's answers
function evaluateAnswer(answer) {
    if ( answer == questions[currentQuestion].correctAnswer) {
        score ++;
        // Create a p element to indicate answer result
        var response = document.createElement("p");
        response.textContent = "Correct!";
        // Calculate user score for later storage
        userScore = (100 / questions.length) * score;
        console.log(userScore);   

        if (currentQuestion < lastQuestion) {
        populateQuestions();
        currentQuestion ++;
        }                      
    }
    else {
        // Create a p element to indicate answer result
        var response = document.createElement("p");
        response.textContent = "Incorrect!";
        // timer decreases by 10 seconds
        testTime = testTime - 10;
    }
    // keep populating questions until the last question is answered
    if (currentQuestion < lastQuestion) {
        populateQuestions();
        currentQuestion ++;
        }
    else {
        recordInitials();
    }
}

// 6. Record initials and score
function recordInitials() {
    var testScore = (ev)=> {
    // Prevent refreshing of page in form
    ev.preventDefault();
    // Add score and initials on each attempt
    var recordScores = {
            initials: document.getElementById('initials').value,
            score: userScore
        }
    }
}

// 7. High Scores
//Store high score
function highScores() {
    storeHighScore = e =>{
        e.preventDefault();
    };
// Calculate score
        var testScore =  Math.round(100*score/questions.length);
        document.querySelector("scoreDiv").textContent = testScore;

// Display 'initials' section
    document.querySelector("#initials").setAttribute("style", "display: block;");
    // instruct user to enter and submit initials
    var rankingList = document.createElement("ol");
   var scoresEl = document.createElement("li");
   localStorage.setItem(scoresEl, testScore);
}

// 7. Time is over
function timeOver() {
    if (testTime <= 0) {
        window.alert("Sorry time is over");
        highScores();
    }
}

// 8. Exit Quiz
function exitQuiz() {
    document.querySelector("#assessment").setAttribute("style", "display: none;")
    document.querySelector("#startAssessment").setAttribute("style", "display: none;")    
    document.querySelector("#exitTest").setAttribute("style", "display: block;")
}

startBtn.addEventListener("click", startTest);
quitBtn.addEventListener("click", exitQuiz);