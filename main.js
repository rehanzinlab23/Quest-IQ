// Data

const questions = [
   {
    question: 'Which is the largest animal in the world?',
     answers: [
          {text: 'Shark', correct: false},
          {text: 'Blue Whale', correct: true},
          {text: 'Elephant', correct: false},
          {text: 'Giraffe', correct: false},
     ]
   },

      {
     question: 'Which is the smallest country in the world?',
     answers: [
          {text: 'Vatican City', correct: true},
          {text: 'Bhutan', correct: false},
          {text: 'Nepal', correct: false},
          {text: 'Sri Lanka', correct: false},
     ]
   },

    {
     question: 'Which is the largest desert in the world?',
     answers: [
          {text: 'Sahara', correct: false},
          {text: 'Gobi', correct: false},
          {text: 'Kalahari', correct: false},
          {text: 'Antartica', correct: true},
     ]
   },

  {
     question: 'Which is the smallest continent in the world?',
     answers: [
          {text: 'Asia', correct: false},
          {text: 'Europe', correct: false},
          {text: 'Australia', correct: true},
          {text: 'Africa', correct: false},
     ]
   },

     {
     question: 'Which is the largest ocean in the world?',
     answers: [
          {text: 'Pacific', correct: true},
          {text: 'Indian', correct: false},
          {text: 'Atlantic', correct: false},
          {text: 'Arctic', correct: false},
     ]
   },

        {
     question: 'Which planet is known as the Red Planet?',
     answers: [
          {text: 'Earth', correct: false},
          {text: 'Jupiter', correct: false},
          {text: 'Mars', correct: true},
          {text: 'Mercury', correct: false},
     ]
   },

          {
     question: 'Which is the longest river in the world?',
     answers: [
          {text: 'Yangtze', correct: false},
          {text: 'Indus', correct: false},
          {text: 'Amazon', correct: false},
          {text: 'Nile', correct: true},
     ]
   },

      {
     question: 'Which country is called the “Land of the Rising Sun?',
     answers: [
          {text: 'Japan', correct: true},
          {text: 'India', correct: false},
          {text: 'South Korea', correct: false},
          {text: 'China', correct: false},
     ]
   },

         {
     question: 'Which is the largest country in the world by area?',
     answers: [
          {text: 'India', correct: false},
          {text: 'America', correct: false},
          {text: 'Russia', correct: true},
          {text: 'Mangolia', correct: false},
     ]
   },

            {
     question: 'Which country is called the Land of the Midnight Sun?',
     answers: [
          {text: 'Nepal', correct: false},
          {text: 'Norway', correct: true},
          {text: 'Russia', correct: false},
          {text: 'Netherlands', correct: false},
     ]
   }
];

// Global Elements

const questionElement = document.getElementById('question');

const answerButtons = document.getElementById('answer-buttons');

const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;

let score = 0;

// Function for starting of Quiz

function startQuiz() {
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = 'Next';
     showQuestion();
};

// Function for showing of Question

function showQuestion() {
     resetState();
let currentQuestion = questions[currentQuestionIndex];

let questionNo = currentQuestionIndex + 1;

questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
     const button = document.createElement('button');
     button.innerHTML = answer.text;
     button.classList.add('btn');
     answerButtons.appendChild(button);
     if(answer.correct) {
          button.dataset.correct = answer.correct;
     }
     button.addEventListener('click', selectAnswer);
    });
};

// Function for reset of Quiz

function resetState() {
     nextButton.style.display = 'none';
     while (answerButtons.firstChild) {
          answerButtons.removeChild(answerButtons.firstChild);
     };
};

// Function for select of answers

function selectAnswer(e) {
     const selectedBtn = e.target;

     const isCorrect = selectedBtn.dataset.correct === 'true';

     if(isCorrect) {
          selectedBtn.classList.add('correct');
          score++;
     } else {
            selectedBtn.classList.add('incorrect');
     };

Array.from(answerButtons.children).forEach(button => {
if (button.dataset.correct === 'true') {
     button.classList.add('correct');
};
button.disabled = 'true';

});
nextButton.style.display = 'block';
};


// Function for show of score

 function showScore() {
resetState();
questionElement.innerHTML =  `You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML = 'Play Again';
nextButton.style.display = 'block';
 };

// Function for handling of next button

function handleNextButton() {
currentQuestionIndex++;
if(currentQuestionIndex < questions.length) {
showQuestion();
} else {
showScore();
};
};

// Adding Event Listener of click to next-button

nextButton.addEventListener('click', ()=> {
     if(currentQuestionIndex < questions.length) {
handleNextButton();
     } else {
startQuiz();
     };
});

// Calling the function for starting of the quiz

startQuiz();