

let myQuestions = [
    {
        question: ''
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
    {
        question: '',
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
    {
        question: '',
        answer: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
    {
        question: '',
        answer: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    }
];

fuction generateQuiz(questions, quizContainer, resultsConstainer, submitButton) {
    
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
        showResults(questions, quizConainer, resultsContainer);
    }
}