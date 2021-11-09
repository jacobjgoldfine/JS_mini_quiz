var time = questions.length * 10;
var timer;
var qIndex = 0;
var startBtn = document.getElementById("start-btn");
var timeEl = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var gameSpace = document.getElementById("gameSpace");

function startQuiz() {
  timer = setInterval(function () {
    time--;
    timeEl.textContent = time;
    if (time === 0) {
      endQuiz();
    }
  }, 1000);
  showQuestion();
}

function endQuiz() {
  clearInterval(timer);
  timeEl.textContent = "Game Over";
  var timeScore = timeEl.value;
  console.log(timeScore);
  timeEl.textContent = `Score ${timeScore}`;
}

//add if statement

// function showQuestion() {
//   questions.forEach((item, index, array) => {
//     asyncFunction(item, () => {
//       itemsProcessed++;
//       if (itemsProcessed < array.length) {
//         var currentQuestion = questions[qIndex];
//         if (questions) {
//           questionsEl.textContent = currentQuestion.title;
//           choicesEl.innerHTML = "";
//           for (var i = 0; i < currentQuestion.choices.length; i++) {
//             var choice = currentQuestion.choices[i];
//             var newBtn = document.createElement("button");
//             newBtn.textContent = choice;
//             choicesEl.appendChild(newBtn);
//             newBtn.onclick = choiceClick;
//           }
//         }
//       } else {
//         endQuiz;
//       }
//     });
//   });
// }

function showQuestion() {
  var currentQuestion = questions[qIndex];

  // if (questions.length) {
  questionsEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var newBtn = document.createElement("button");
    newBtn.textContent = choice;
    choicesEl.appendChild(newBtn);
    newBtn.onclick = choiceClick;
  }
  // } else {
  //   endQuiz();
  // }
}

function choiceClick(event) {
  if (qIndex >= questions.length) {
    endQuiz();
  } else {
    var currentQuestion = questions[qIndex];
    var choiceClick = event.target.textContent;
    if (choiceClick.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      console.log("you got it right");
    } else {
      console.log("you got it wrong");
      time - 5;
    }
    qIndex++;
    showQuestion();
  }
}

startBtn.onclick = startQuiz;
