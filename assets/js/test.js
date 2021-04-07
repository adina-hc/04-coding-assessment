/* Array for questions

var questionBlock = [
    {
        question: "1. what are the different data types present in javascript",
        answerA: "var str = 'Hola'; this is a string",
        answerB: "var x = 10; ",
        answerC: "string, number, boolean",
        correctAnswer: "C"
    }

    {
    question: "2. Hoisting in javascript is?",
    answerA: "JavaScript's default behavior of moving declarations to the top of the scope",
    answerB: "Hoisting is the initialization of a variable",
    answerC: "None of the above",
    correctAnswer: "answerA"
    }

    {
        question: "3. What is implicit type coercion in javascript?",
        answerA: "The strict equality operator === triggers implicit type coercion",
        answerB: "Javascript attemps to coerce an unexpected value type to the expected type",
        answerC: "Both answers are correct",
        correctAnswer: "answerB",
    }

    {
        question: "4. What is an Immediately Invoked Function Expression (IIFE)?",
        answerA: "JavaScript function that runs as soon as it is defined",
        answerB: "IT is a simple way to isolate variable declarations",
        answerC: "Above answers are correct",
        correctAnswer: "answerC"
    }

    {
        question: "5. A higher order function is:",
        answerA: "A function or functions that operate on other function or functions, either arguments or returning the functions",
        answerB: "A function that is placed at the top of the script",
        answerC: "Above answers are incorrect",
        correctAnswer: "answerA"
    }
]
function populateQuestions(){
    document.querySelector("#questionItem").textContent = questions[currentQ]
    document.querySelector(".answer1").textContent = answers[currentQ].a
    document.querySelector(".answer2").textContent = answers[currentQ].b
    document.querySelector(".answer3").textContent = answers[currentQ].c
}
*/

/*
// 3. Difference between "==" and "===" operators
// 4. What is implicit type coercion in javascript
// 5. Javascript is a statically typed language (true/false)
// 6. NaN property in JavaScript means
// 7. Example of pass by value
// 8. Example of pass by reference
// 9. Immediately Invoked Function in javascript is:
// 10. What is a higher order function in js
// 11. "this" keyword means:
// 12. Currying in javascript means
// 13. Scope in js is
// 14. Scope Chain is
// 15. Closures are
// 16. call(), apply(), bind() methods
// 17. object prototypes are
// 18. what are callbacks?
// 19. Memoization?
// 20. recursion in a programming language is:
// 21. use of a constructor function in javascript:
//22. the DOM is
//}
*/

/*// Show progress bar
function showProgress(){
    for(questionIndex = 0; questionIndex <= lastQuestion; questionIndex++) {
        progress.innerHTML += "<div class='pgrs' id="+questionIndex +"></div>";
    }
}
*/

/*const evaluateAnswer = function(){ */
/*
var timeProgress = 300;    
function countdown(){
    var timerInterval = setInterval(function(){
        testTime--;
        var percentage = (testTime * timeProgress)/testTime
        console.log(percentage)
        document.querySelector("#counTime").textContent = testTime;
        document.querySelector("#timerBar").setAttribute("width", percentage )
    
        if(testTime<=0){
            clearInterval(timerInterval)
        }
    }, 1000)
}


*/