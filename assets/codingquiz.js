let startQuizBtn = document.querySelector('.btn');
let timer = document.querySelector('.timer');
let totalSeconds = 0;
let pos = 0;
let correct = 0;
let test, test_status, question, choice, choices, chA, chB, chC, chD;
let secondsLeft = 46;
let leaderboard = document.querySelector('.leaderboard')
let tryAgain = document.querySelector('.again');
let myQuestions = [
    {
        question: 'In which HTML element do we put the JavaScript?',
        answers: {
            a: '&lt;div&gt;',
            b: '&lt;href&gt;',
            c: '&lt;script&gt;',
            d: '&lt;javascript&gt;',
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
        answers: {
            a: '&lt;script href="xxx.js"&gt;',
            b: '&lt;script name="xxx.js"&gt;',
            c: '&lt;script src="xxx.js"&gt;',
            d: '&lt;script a="xxx.js"&gt;',
        },
        correctAnswer: 'C'
    }
];

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


function startTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft -- ;
        timer.textContent =  secondsLeft + ' seconds';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            test.innerHTML = '<h1> Sorry, you ran out of time';
        }
    }, 1000);
};
startQuizBtn.addEventListener('click', startTimer);
startQuizBtn.addEventListener('click', renderQuestion);
startQuizBtn.addEventListener('click', function() {
    document.querySelector('.jumbotron').style.display = "none";
})

function get(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = get('test');
    if (pos >= myQuestions.length) {
        test.innerHTML = '<h2>You got ' + correct + ' of ' + myQuestions.length + 'questions correct</h2>';
        get('test_status').innerHTML = 'Test Completed';
        pos = 0;
        correct = 0;
        return false;
    }

    get('test_status').innerHTML = 'Question ' + (pos+1) +' of ' + myQuestions.length;
    
    question = myQuestions [pos].question;
    chA = myQuestions [pos].answers.a;
    chB = myQuestions [pos].answers.b;
    chC = myQuestions [pos].answers.c;
    chD = myQuestions [pos].answers.d;
    //JSON.stringify(answers);
console.log(chA);
    

    test.innerHTML = '<h3>' + question + '</h3>';

    test.innerHTML += '<label> <input type = "radio" name = "choices" value = "A"> '+ chA +'</label><br>';
    test.innerHTML += '<label> <input type = "radio" name = "choices" value = "B"> '+ chB +'</label><br>';
    test.innerHTML += '<label> <input type = "radio" name = "choices" value = "C"> '+ chC +'</label><br>';
    test.innerHTML += '<label> <input type = "radio" name = "choices" value = "D"> '+ chD +'</label><br><br>';
    test.innerHTML += '<button onclick = "checkAnswer()" >Submit Answer</button>';
}

    function checkAnswer() {
        choices = document.getElementsByName('choices');
        for (var i=0; i < choices.length; i++) {
            if (choices[i].checked) {
                choice = choices[i].value;
            }
        }
        if (choice == myQuestions[pos].correctAnswer) {
            correct++;
        }   
        pos++;

        renderQuestion();
    }

    leaderboard.addEventListener("click", function(){
        //stop timer if goes to highscore panel
        clearInterval(timerInterval);
        //hide all other pages and show highscore panel
        document.querySelector(".jumbotron").style.display = "none";
    
        document.querySelector(".user-scores").textContent = " ";
        for (let i = 0; i< localStorage.length; i++) {
            var p = document.createElement("p");
            var user = localStorage.key(i);
            var scores = localStorage.getItem(localStorage.key(i));
            p.textContent = user + ": " + scores;
            document.querySelector(".user-scores").appendChild(p);}
        })





