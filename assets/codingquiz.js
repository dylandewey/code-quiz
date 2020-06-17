let pos = 0;
let correct = 0;
let test, test_status, question, choice, choices, chA, chB, chC, chD;

let startQuizBtn = document.querySelector('.btn');
let timer = document.querySelector('.timer');
let totalSeconds = 0;

function get(x) {
    return document.getElementById(x);
}
function getFormattedSeconds() {
    let secondsLeft = (totalSeconds - secondsElapsed) %60;

    let formattedSeconds;

    if (secondsLeft < 10) {
        formattedSeconds = '0' + secondsLeft;
    }else {
        formattedSeconds = secondsLeft;
    }

    return formattedSeconds;
}
function renderTime() {
    secondsDisplay.textContent = getFormattedSeconds();
}
startQuizBtn.addEventListener('click', startTimer);
let secondsLeft = 46;
function startTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft -- ;
        timer.textContent = 'Time: ' + secondsLeft + ' seconds';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};


let myQuestions = [
    {
        question: 'In which HTML element do we put the JavaScript?',
        answers: {
            a: '<div>',
            b: '<href>',
            c: '<script>',
            d: '<javascript>',
        },
        correctAnswer: 'C'
    },
    
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: {
            a: 'msgBox("Hello World")',
            b: 'alert("Hello World")',
            c: 'alertBox("Hello World")',
            d: 'msg("Hello World")',
        },
        correctAnswer: 'B'
    },

    {
        question: 'What does "appendChild" mean?',
        answers: {
            a: 'To handcuff the child and take it into custody',
            b: 'To append a node as the last child of a node',
            c: 'To fix a child to its parent',
            d: 'To link another document to the html',
        },
        correctAnswer: 'B'
    },
    
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answer: {
            a: '<script href="xxx.js">',
            b: '<script name="xxx.js">',
            c: '<script src="xxx.js">',
            d: '<script a="xxx.js">',
        },
        correctAnswer: 'C'
    }
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    
    function showQuestions(questions, quizContainer) {
        let output = [];
        let answers;

        for(let i=0; i<questions.length; i++) {
            answers = [];

            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + leter + ': '
                        +questions[i].answers[letter]
                    + '</label>'
                );
            }
        }
    }

    function showResults(question, quizContainer, resultsContainer) {
        //code will go here
    }

    //show the questions
    showQuestions(questions, quizContainer) 

    // when user clicks submit, show results
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}