const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;


// localStorage.setItem("highScores",JSON.stringify([]));
// console.log(JSON.parse(localStorage.getItem("highScores")));

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});



const saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

// store the score in object with name of user & his score
  const score = {
    score: Math.floor(Math.random() * 100),
    // score:mostRecentScore,
    name:username.value
  };
  // we push the score  in highScores array
  highScores.push(score);

  //we sort the highScores array in descending order 
  highScores.sort( (a,b) => b.score - a.score);

 // we cut off the array after 5th element
  highScores.splice(5);

  localStorage.setItem("highScores",JSON.stringify(highScores));
  window.location.assign("index.html")
};

