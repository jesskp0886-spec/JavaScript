const quizData = [
    {
        
        question: "What's your ideal way to spend a peaceful Sunday?",
        options: [
            "Reading a meaningful book",
            "Exploring a new place",
            "Practicing mindfulness",
            "Meeting close friends"
        ],
        answer: 2
    },

    {
        question: "Which philosophy resonates most with you?",
        options: [
            "Less is more",
            "Life is an adventure",
            "Success is everything",
            "Competition creates growth"
        ],
        answer: 0
    },

    {
        question: "What brings you the greatest satisfaction?",
        options: [
            "Inner peace",
            "Recognition",
            "Luxury",
            "Power"
        ],
        answer: 0
    },

    {
        question: "Your dream living space would be?",
        options: [
            "Minimal and clutter-free",
            "Bold and vibrant",
            "Tech-filled apartment",
            "Busy city loft"
        ],
        answer: 0
    },

    {
        question: "How do you approach challenges?",
        options: [
            "Stay calm and analyze",
            "Rush into action",
            "Avoid them",
            "Let others solve them"
        ],
        answer: 0
    },

    {
        question: "What do you value most in life?",
        options: [
            "Simplicity",
            "Status",
            "Money",
            "Popularity"
        ],
        answer: 0
    },

    {
        question: "How do you define a successful life?",
        options: [
            "Living with purpose",
            "Earning a high income",
            "Being famous",
            "Owning expensive things"
        ],
        answer: 0
    },

    {
        question: "What helps you recharge after a stressful day?",
        options: [
            "Spending time in nature",
            "Shopping",
            "Scrolling social media",
            "Working even harder"
        ],
        answer: 0
    },

    {
        question: "Which habit would you like to develop the most?",
        options: [
            "Practicing gratitude daily",
            "Buying the latest gadgets",
            "Winning every competition",
            "Being constantly busy"
        ],
        answer: 0
    },

    {
        question: "What best represents your personal philosophy?",
        options: [
            "Focus on what truly matters",
            "Always stay ahead of others",
            "The more possessions, the better",
            "Success is measured by popularity"
        ],
        answer: 0
    }
    
];

const startScreen = document.getElementById("startScreen");
const quizContainer = document.getElementById("quizContainer");
const startBtn = document.getElementById("startBtn");
const question = document.getElementById("question");

const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const nextBtn = document.getElementById("nextBtn");
const timerElement = document.getElementById("time");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timer;
let timeLeft = 10;
let autoNextTimeout;

function goToNextQuestion(){

    clearTimeout(autoNextTimeout);
    clearInterval(timer);
    currentQuestion++;

    if(currentQuestion < quizData.length){
        loadQuestion();
    }else{
        showResult();
    }
}

startBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    loadQuestion();
});

function loadQuestion(){

    clearTimeout(autoNextTimeout);

    const current = quizData[currentQuestion];

    question.textContent = current.question;

    option0.textContent = current.options[0];
    option1.textContent = current.options[1];
    option2.textContent = current.options[2];
    option3.textContent = current.options[3];

    document.getElementById("questionCount").textContent = 
                `Question ${currentQuestion + 1}  of ${quizData.length}`;

    document.querySelectorAll(".option").forEach(btn => {
        btn.classList.remove("correct","wrong","active");

        btn.disabled = false;
    });

    selectedAnswer = null;

    updateProgress();
    startTimer();
}

function selectAnswer(index){
    selectedAnswer = index;

    clearInterval(timer);

    const options = document.querySelectorAll(".option");

    options.forEach(btn => btn.disabled = true);

    const correctAnswer = quizData[currentQuestion].answer;

    if(index === correctAnswer){
        score++;
        options[index].classList.add("correct");
    }else{
        options[index].classList.add("wrong");
        options[correctAnswer].classList.add("correct");
    }
    autoNextTimeout = setTimeout(goToNextQuestion, 1000);
}

nextBtn.addEventListener("click", () => {
    if(selectedAnswer === null){
        alert("Please select an answer");
        return;
    }
    goToNextQuestion();
});

function startTimer(){
    clearInterval(timer);
    timeLeft = 10;
    timerElement.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if(timeLeft <= 0){
            clearInterval(timer);

            currentQuestion++;

            if(currentQuestion < quizData.length){
                loadQuestion();
            }else{
                showResult();
            }
        }
    },1000);
}

function updateProgress(){
    const progress = (currentQuestion / quizData.length) * 100;

    document.querySelector(".progress-bar").style.width = progress + "%";
}

function showResult(){

    clearInterval(timer);

    quizContainer.innerHTML = `
        <div class="result">
            <h2>🎉 Congratulations</h2>
            <p>Your Score</p>
            <h1>${score}/${quizData.length}</h1>
            <button class="restart" onclick="location.reload()">
                Restart Quiz
            </button>
        </div>`;
}