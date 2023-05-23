
// Get the question element from the HTML document
const question = document.getElementById("question");
// Get an array of choice elements from the HTML document
const choices = Array.from(document.getElementsByClassName("choice-text"));
//Get question counter 
const questionCounterText = document.getElementById('questioncount');
const scoreText = document.getElementById('score');
const loader = document.getElementById("loader");
const game = document.getElementById("game");


// Declare variables for the current question, answer acceptance, score, question counter, and available questions
let currentQuestion = {};
let acceptingAnswers = false
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Define an array of question objects
let questions = [];

fetch("https://opentdb.com/api.php?amount=10&category=23")
.then(res => {
  return res.json();
})

.then((loadedQuestions) => {
  questions = loadedQuestions.results.map((loadedQuestion) => {
      const formattedQuestion = {
          question: loadedQuestion.question
      };

      const answerChoice = [... loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random()*3) + 1;
      answerChoice.splice(formattedQuestion.answer -1, 0,
        loadedQuestion.incorrect_answer);

        answerChoice.forEach((choice,index) =>{
          formattedQuestion["choice" + (index+1)] = choice;
        });
        return formattedQuestion;
    

  })

  // Start the games
 startGame();
})
.catch(err => {
  console.error(err);
});


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

  // Get a new question
  getNewQuestion();
  game.classList.remove("hidden");
  loader.classList.add("hidden");

};

// Function to get a new question
getNewQuestion = () => {
  // Check if there are no more available questions or the maximum number of questions have been reached
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //store the score in local storage to save it
    localStorage.setItem("mostRecentScore",score);
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
        
    },500);
  });
});

incrementscore = num =>{
  score += num;
  scoreText.innerText = score;
};

