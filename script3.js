const questions = [
    {
        question: "What is your dream?",
        answers: [
            {text: "to make a positive change", correct: false},
            {text: "to make a positive change", correct: true},
            {text: "to make a positive change", correct: false},
            {text: "to make a positive change", correct: false},
        ]
    },
    {
        question: "What is your dream?",
        answers: [
            {text: "to make a positive change", correct: false},
            {text: "to make a positive change", correct: true},
            {text: "to make a positive change", correct: false},
            {text: "to make a positive change", correct: false},
        ]
    },
    {
        question: "What is your dream?",
        answers: [
            {text: "to make a positive change", correct: false},
            {text: "to make a positive change", correct: true},
            {text: "to make a positive change", correct: false},
            {text: "to make a positive change", correct: false},
        ]
    },
    {
        question: "What is your dream?",
        answers: [
            {text: "to make a positive change", correct: false},
            {text: "to make a positive change", correct: true},
            {text: "to make a positive change", correct: false},
            {text: "to make a positive change", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    letcurrentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct  = answer.correst;

        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again;"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();