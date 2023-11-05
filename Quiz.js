const questions = [
    //1
    {
        question: "1. Qual é o significado de uma opção binária Call?",
        options: ["a)Comprar uma opção que o preço do ativo vai subir.", "b)Comprar uma opção que o preço do ativo vai cair.", "c)Vender uma opção que o preço do ativo vai subir.", "d)Vender uma opção que o preço do ativo vai cair."],
        correctAnswer: "a)Comprar uma opção que o preço do ativo vai subir."
    },
    //2
    {
        question: "2. O que é o termo Out of the Money em opções binárias?",
        options: ["a)A opção expira sem valor.", "b)A opção está no lucro.", "c)A opção foi comprada.", "d)A opção foi vendida."],
        correctAnswer: "a)A opção expira sem valor."
    },
    //3
    {
        question: "3. Qual é a principal característica das opções binárias?",
        options: ["a)São instrumentos de dívida.", "b)Têm um período de maturidade indefinido.", "c)Oferecem apenas dois resultados possíveis.", "d)Não envolvem risco financeiro."],
        correctAnswer: "c)Oferecem apenas dois resultados possíveis."
    },

    //4
    {
        question: "4. O que é o Forex, em relação às opções binárias?",
        options: ["a)Uma estratégia de negociação.", "b)Uma plataforma de negociação.", "c)Um mercado financeiro para pares de moedas.", "d)Um indicador técnico."],
        correctAnswer: "c)Um mercado financeiro para pares de moedas."
    },
    //5
    {
        question: "5) Qual é o propósito da função Put em opções binárias??",
        options: ["a)Comprar uma opção que o preço do ativo vai subir.", "b)Comprar uma opção que o preço do ativo vai cair.", "c)Vender uma opção que o preço do ativo vai subir.", "d)Vender uma opção que o preço do ativo vai cair."],
        correctAnswer: "b)Comprar uma opção que o preço do ativo vai cair."
    },   
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.innerHTML = questions[currentQuestionIndex].question;

    optionsContainer.innerHTML = "";
    for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        const option = document.createElement("button");
        option.innerText = questions[currentQuestionIndex].options[i];
        option.onclick = () => checkAnswer(option.innerText);
        optionsContainer.appendChild(option);
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h1>Quiz Completo</h1>
                               <p>Sua Pontuação: ${score}/${questions.length}</p>
                               <p>Respostas:</p>
                                <p>1. a) Comprar uma opção que o preço do ativo vai subir.</p>
                             <p></p> 2. a) A opção expira sem valor.</p>
                              <p>3. c) Oferecem apenas dois resultados possíveis.</p>
                              <p>4. c) Um mercado financeiro para pares de moedas.</p>
                              <p></p> 5. b) Comprar uma opção que o preço do ativo vai cair.</p>;`
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;
