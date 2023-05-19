
// Get the question element from the HTML document
const question = document.getElementById("question");
// Get an array of choice elements from the HTML document
const choices = Array.from(document.getElementsByClassName("choice-text"));
//Get question counter 
const questionCounterText = document.getElementById('questioncount');
const scoreText = document.getElementById('score');

// Declare variables for the current question, answer acceptance, score, question counter, and available questions
let currentQuestion = {};
let acceptingAnswers = false
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Define an array of question objects
let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "script",
    choice2: "head",
    choice3: "body",
    choice4: "div",
    answer: 1,
  },
  {
    question: "Who is the Prime Minister of India?",
    choice1: "Rahul Gandhi",
    choice2: "Narendra Modi",
    choice3: "Amit Shah",
    choice4: "Manmohan Singh",
    answer: 2,
  },
  {
    question: "What is the capital of India?",
    choice1: "Mumbai",
    choice2: "Kolkata",
    choice3: "Chennai",
    choice4: "Delhi",
    answer: 4,
  },
  {
    question: "Who is known as the father of India?",
    choice1: "Mahatma Gandhi",
    choice2: "Jawaharlal Nehru",
    choice3: "Subhash Chandra Bose",
    choice4: "Sardar Vallabhbhai Patel",
    answer: 1,
  }
];

// Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

// Function to start the game
startGame = () => {
  // Reset question counter and score
  questionCounter = 0;
  score = 0;

  // Copy the array of questions to availableQuestions
  availableQuestions = [...questions];

;

  // Get a new question
  getNewQuestion();
};

// Function to get a new question
getNewQuestion = () => {
  // Check if there are no more available questions or the maximum number of questions have been reached
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // Go to the end page
    return window.location.assign("score.html");
  }

  // Increment the question counter
  questionCounter++;
   // Count question using ES6 template literals
   questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  // Select a random question from availableQuestions
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  // Display the question text
  question.innerText = currentQuestion.question;

  // Display the choices for the current question
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  // Remove the selected question from availableQuestions
  availableQuestions.splice(questionIndex, 1);

  // Allow answers to be accepted
  acceptingAnswers = true;
};

// Add click event listeners to the choices
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    // Check if answers are currently being accepted
    if (!acceptingAnswers) return;

    // Answers are no longer accepted
    acceptingAnswers = false;

    // Get the selected choice and its associated answer
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset ["number"];



    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    
    selectedChoice.parentElement.classList.add(classToApply);

    if (classToApply === 'correct'){
      incrementscore(CORRECT_BONUS);
    }
    

    setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
            // Get a new question
        getNewQuestion();
        
    },1000);
  });
});

incrementscore = num =>{
  score += num;
  scoreText.innerText = score;
};
// Start the game
startGame();
