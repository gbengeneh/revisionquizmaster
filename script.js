import questions from './questions.js';

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const startButton = document.getElementById("start-btn");
const userNameInput = document.getElementById("user-name");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");

let currentQuestionIndex = 0;
let score = 0;
let attempted = 0;
let userName = "";

function saveState(state) {
    localStorage.setItem('quizState', JSON.stringify(state));
}

function loadState() {
    return JSON.parse(localStorage.getItem('quizState')) || null;
}

function startQuiz() {
    userName = userNameInput.value.trim() || "Anonymous";
    welcomeScreen.style.display = "none";
    quizScreen.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    attempted = 0;
    nextButton.innerHTML = "Next";
    submitButton.style.display = "none";
    saveState({ userName, currentQuestionIndex, score, attempted, screen: 'quiz' });
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
         if(answer.correct){
            button.dataset.correct = answer.correct;
         }
        button.addEventListener("click", selectAnswer);
    });

    // Show submit button after 10 questions
    if (questionNo >= 10) {
        submitButton.style.display = "inline-block";
    }
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    attempted++;
     Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     });
     nextButton.style.display = "block";
     saveState({ userName, currentQuestionIndex, score, attempted, screen: 'quiz' });
}
function showScore(){
    resetState();
    const unattempted = questions.length - attempted;
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!<br>Attempted: ${attempted}<br>Unattempted: ${unattempted}<br><button id="history-btn">View History</button>`;
    nextButton.innerHTML= "Start Again";
    nextButton.style.display = "block";
    submitButton.style.display = "none";

    // Save to history
    saveToHistory(userName, score, attempted, unattempted);
    // Clear quiz state since quiz is finished
    localStorage.removeItem('quizState');
    // Add event listener for history button after it's added to DOM
    document.getElementById("history-btn").addEventListener("click", showHistory);
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length ){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        // Start again from beginning
        startQuiz();
    }
})

function saveToHistory(name, score, attempted, unattempted) {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    const result = {
        name: name,
        score: score,
        total: questions.length,
        attempted: attempted,
        unattempted: unattempted,
        date: new Date().toLocaleString()
    };
    history.push(result);
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

function showHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    if (history.length === 0) {
        questionElement.innerHTML = "No quiz history found.";
    } else {
        let historyHTML = "<h3>Quiz History</h3><ul>";
        history.forEach(entry => {
            historyHTML += `<li><strong>${entry.name}</strong> - Score: ${entry.score}/${entry.total} (Attempted: ${entry.attempted}, Unattempted: ${entry.unattempted}) - ${entry.date}</li>`;
        });
        historyHTML += "</ul>";
        questionElement.innerHTML = historyHTML;
    }
    nextButton.innerHTML = "Start Again";
    nextButton.style.display = "block";
    submitButton.style.display = "none";
}

submitButton.addEventListener("click", ()=>{
    const confirmSubmit = confirm("Are you sure you want to submit the quiz early? Unanswered questions will be counted as incorrect.");
    if (confirmSubmit) {
        showScore();
    }
})

startButton.addEventListener("click", ()=>{
    startQuiz();
})



// Initialize app state on load
function initApp() {
    const state = loadState();
    if (state && state.screen === 'quiz') {
        userName = state.userName;
        currentQuestionIndex = state.currentQuestionIndex;
        score = state.score;
        attempted = state.attempted;
        welcomeScreen.style.display = "none";
        quizScreen.style.display = "block";
        nextButton.innerHTML = "Next";
        submitButton.style.display = currentQuestionIndex + 1 >= 10 ? "inline-block" : "none";
        showQuestion();
    } else {
        // Show welcome screen
        welcomeScreen.style.display = "block";
        quizScreen.style.display = "none";
    }
}

initApp();
