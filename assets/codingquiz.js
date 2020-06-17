let startQuizBtn = document.querySelector('.btn');
let timer = document.querySelector('.timer');
let totalSeconds = 0;
let pos = 0;
let correct = 0;
let test, test_status, question, choice, choices, chA, chB, chC, chD;

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

function get(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = get('test');
    if (pos >= questions.length) {
        test.innerHTML = '<h2>You got ' + correct + ' of ' + questions.length + 'questions correct</h2>';
        get('test_status').innerHTML = 'Test Completed';
        pos = 0;
        correct = 0;
        return false;
    }

    get('test_status').innerHTML = 'Question ' +(pos+1)+' of '+questions.length;

    question = questions [pos].question;
    chA = questions[pos].a;
    chB = questions [pos].b;
    chC = questions [pos].c;
    chD = questions [pos].d;

    test.innerHTML = '<h3>' +question+ '</h3>';

    test.innerHTML += '<label> <input type = "block" name = "choices" value = "A"> '+chA+'</label><br>';
    test.innerHTML += '<label> <input type = "block" name = "choices" value = "B"> '+chB+'</label><br>';
    test.innerHTML += '<label> <input type = "block" name = "choices" value = "C"> '+chC+'</label><br>';
    test.innerHTML += '<label> <input type = "block" name = "choices" value = "D"> '+chD+'</label><br><br>';
    test.innerHTML += '<button onclick = "checkAnswer()"> Submit Answer</button>';
}

    function checkAnswer() {
        choices = document.getElementsByName('choices');
        for (var i=0; i < choices.length; i++) {
            if (choices[i].checked) {
                choice - choices[i].nodeValue;
            }
        }
        if (choice == questions[pos].answer) {
            correct++;
        }
        pos++;

        renderQuestion();
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

let secondsLeft = 46;
function startTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft -- ;
        timer.textContent =  secondsLeft + ' seconds';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};




startQuizBtn.addEventListener('click', startTimer);
startQuizBtn.addEventListener('click', renderQuestion);