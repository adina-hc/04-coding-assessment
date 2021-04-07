// 0. Select elements
var countTime = document.getElementById("countTime");
var timeBar = document.getElementById("timeBar");
var progBar = document.getElementById("progBar");

var startBtn = document.getElementById("startBtn");
var quitTest = document.getElementById("quitBtn");

var question = document.getElementById("questions");

var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");

var startAssessment = document.querySelector("#startAssessment");
var instructions = document.querySelector(".instructions");
var start = document.getElementById("startTestBtn");

var initials = document.getElementById("initials");

// 1. Variable declaration
var testScore= 0;
var testTime = 180;
var counter = 0;

// Start Test
function startTest() {
    currentQ = 0;
    countdown();
    document.querySelector("#assessment").setAttribute("style", "display: block;");
    document.querySelector("#startAssessment").setAttribute("style", "display: none;");
    populateQuestions();

}

// 2. Questionnaire and variables defined for the questions
var currentQ = 0; // current question
var questions = [
    {
        question: "1. what are the different data types present in javascript",
        answerA: "var str = 'Hello'; this is a string",
        answerB: "var x = 10; ",
        answerC: "string, number, boolean",
        correctAnswer: "string, number, boolean"
    },

    {
        question: "2. Hoisting in javascript is?",
        answerA: "JavaScript's default behavior of moving declarations to the top of the scope",
        answerB: "Hoisting is the initialization of a variable",
        answerC: "None of the above",
        correctAnswer: "JavaScript's default behavior of moving declarations to the top of the scope"
    },

    {
        question: "3. What is implicit type coercion in javascript?",
        answerA: "The strict equality operator === triggers implicit type coercion",
        answerB: "Javascript attemps to coerce an unexpected value type to the expected type",
        answerC: "Both answers are correct",
        correctAnswer: "Javascript attemps to coerce an unexpected value type to the expected type",
    },

    {
        question: "4. What is an Immediately Invoked Function Expression (IIFE)?",
        answerA: "JavaScript function that runs as soon as it is defined",
        answerB: "IT is a simple way to isolate variable declarations",
        answerC: "Above answers are correct",
        correctAnswer: "Above answers are correct"
    },

    {
        question: "5. A higher order function is:",
        answerA: "A function or functions that operate on other function or functions, either arguments or returning the functions",
        answerB: "A function that is placed at the top of the script",
        answerC: "Above answers are incorrect",
        correctAnswer: "A function or functions that operate on other function or functions, either arguments or returning the functions"
    }
]

var lastQ = questions.length - 1;

// 3. Populate the questions on the screen and add listeners to the questions

function populateQuestions() {
    var quest = questions[currentQ];
    questionItem.innerHTML = "<p>" + questions[currentQ].question + "</p>";
    answerA.innerHTML = questions[currentQ].answerA;
    document.getElementById("A").addEventListener("click", evaluateAnswer());
    answerB.innerHTML = questions[currentQ].answerB;
    document.getElementById("B").addEventListener("click", evaluateAnswer());
    answerC.innerHTML = questions[currentQ].answerC;
    document.getElementById("C").addEventListener("click", evaluateAnswer());
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
function answer() {
    if (document.getElementById('A').clicked == true) {
        var answer = document.getElementById("A").value;
        window.alert(answer);
        console.log(answer);
        return answer;
    }

}

function evaluateAnswer() {
    if ( answer() == questions[currentQ].correctAnswer) {
        score ++;
        var response = document.createElement("p");
        response.textContent = "Correct!";   
    } else {
        var response = document.createElement("p");
        response.textContent = "Incorrect!";
        // timer decreases by 10 seconds
        testTime = testTime - 10;
    }
    if (currentQ < lastQ) {
        populateQuestions();
        currentQ++;
        
    } else {
        highScores();
    }
}


// 6. High Scores

var highScores = function () {
    // Display 'initials' section
    document.querySelector("#initials").setAttribute("style", "display: block;")
   
    // calculate score
    var testScore = Math.round(100*score/questions.length)
    document.querySelector("#score").textContent = testScore;
   


    // instruct user to enter and submit initials
    var rankingList = document.createElement("ol");
   var scoresEl = document.createElement("li");
   localStorage.setItem(scoresEl, testScore);
 }




// 7. Time is over
function timeOver() {
    if (testTime == 0) {
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
//start.addEventListener("click", exitQuiz);






