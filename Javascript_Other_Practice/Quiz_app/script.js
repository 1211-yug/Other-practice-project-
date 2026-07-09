const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Makeup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Markup Language", correct: false },
            { text: "Hyper Transfer Markup Language", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the text color?",
        answers: [
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "background-color", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "link", correct: false },
            { text: "a", correct: true },
            { text: "href", correct: false },
            { text: "url", correct: false },
        ]
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to make a Flexbox container?",
        answers: [
            { text: "display: flex;", correct: true },
            { text: "display: grid;", correct: false },
            { text: "display: block;", correct: false },
            { text: "display: inline;", correct: false },
        ]
    },
    {
        question: "Which operator checks both value and data type in JavaScript?",
        answers: [
            { text: "!=", correct: false },
            { text: "===", correct: true },
            { text: "=", correct: false },
            { text: "==", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to insert an image?",
        answers: [
            { text: "picture", correct: false },
            { text: "src", correct: false },
            { text: "img", correct: true },
            { text: "image", correct: false },
        ]
    },
    {
        question: "Which method is used to print output in the browser console?",
        answers: [
            { text: "display()", correct: false },
            { text: "document.write()", correct: false },
            { text: "print()", correct: false },
            { text: "console.log()", correct: true },
        ]
    },
    {
        question: "What is the correct file extension for a JavaScript file?",
        answers: [
            { text: ".js", correct: true },
            { text: ".java", correct: false },
            { text: "javascript", correct: false },
            { text: ".jsx", correct: false },
        ]
    },
    {
        question: "Which JavaScript method is used to select an element by its ID?",
        answers: [
            { text: "querySelector()", correct: false },
            { text: "getElementById()", correct: true },
            { text: "getElementsByClassName()", correct: false },
            { text: "getElementsByTagName()", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    if (score >= 5) {
        showConfetti();
    }
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();

function showConfetti() {

    const container = document.getElementById("confetti-container");

    const colors = [
        "#ff4d4d",
        "#00cc66",
        "#3399ff",
        "#ffcc00",
        "#ff66cc",
        "#9933ff"
    ];

    for (let i = 0; i < 150; i++) {

        const paper = document.createElement("div");

        paper.classList.add("confetti");

        paper.style.left = Math.random() * 100 + "vw";

        paper.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        paper.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        paper.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(paper);

        setTimeout(() => {
            paper.remove();
        }, 15000);

    }

}