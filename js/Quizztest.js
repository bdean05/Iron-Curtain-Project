

const ironCurtainQuiz = [
  {
    question: "1/10 / Nikita Khrushchev and Fidel Castro are having secret talks. They're also directing important maneuvers in Cuba. What should the American government do?",
    options: ["Sit and wait, it'll all go away.", "Deploy U2 spy planes over cuba, find out what's going on.", "Lean towards a more pro-communist policy."],
    answer: 1,
    background: "./../images/image-question-1.jpg",
  },
  {
    question: "2/10 / A U2 spy plane has taken high-altitude pictures of suspicious giant cylindrical objects. They are:",
    options: ["Giant Havana cigar monuments.", "Outdoor sewer tunnels.", "Nuclear missile installations."],
    answer: 2,
    background: "./../images/image-question-2.jpg",
  },
  {
    question: "3/10 / The U2 camera footage has arrived back to base. The number one priority is to show it to:",
    options: ["The president.", "The Pentagon.", "The CIA."],
    answer: 0,
    background: "./../images/image-question-3.jpg",
  },
  {
    question: "4/10 / With all top officials aware of the situation, and with an already scheduled meeting with Soviet Ambassadors, the right move is to:",
    options: ["Confront the Ambassadors with anger and threats.", "Figure out a plan, and not let them know that we know.", "Beg the Soviets to halt their installations."],
    answer: 1,
    background: "./../images/image-question-4.jpg",
  },
  {
    question: "5/10 / With more inbound Soviet ships enroute to Cuba, an immediate initiative has to be taken for now:",
    options: ["A strict naval quarantine blockade to stop further Soviet ships from bringing more nuclear weapons into Cuba.", "A full-scale attack on Cuba.", "A withdrawl of NATO forces from middle-western Europe."],
    answer: 0,
    background: "./../images/image-question-5.jpg",
  },
  {
    question: "6/10 / A decision has to be made on how to let the world know about this crisis:",
    options: ["Let the media spread the news with panic.", "Keep everything a secret until word gets out.", "Announce an official course of action to the American people and to the world."],
    answer: 2,
    background: "./../images/image-question-6.jpg",
  },
  {
    question: "7/10 / The Soviets are confused over whether to pull entirely back or to press on. The best way to put more pressure on them is to:",
    options: ["Start firing at their cargo ships.", "Close down their Embassy in Washington.", "Denounce their plot to the world with photographic evidence, at the United Nations."],
    answer: 2,
    background: "./../images/image-question-7.jpg",
  },
  {
    question: "8/10 / Low-level flight reconnaissance planes have been shot at while taking more close-up pictures (even while returning safely). The best follow on action is to:",
    options: ["Keep the evidence mounting and keep pilots safe.", "Use the Cuban firing as an excuse to attack the Soviets.", "Send heavy bombers to destroy the sites, and in the process kill a lot of Russian personnel along with them."],
    answer: 0,
    background: "./../images/image-question-8.jpg",
  },
  {
    question: "9/10 / A trusted friend of Khrushchev has contacted the White House with a message: the Kremlin will remove the Russian missiles in Cuba in exchange of the removal of American missiles in Turkey. The right response is to:",
    options: ["Agree, but in secret, with a 6-month gap, and no linkage.", "Ignore and say 'no deal, we'll attack'.", "Ask world opinion and brandish 'peace at any price'."],
    answer: 0,
    background: "./../images/image-question-9.jpg",
  },
  {
    question: "10/10 / With the crisis ended, the Pentagon suggests to attack Cuba anyway. The answer to this is:",
    options: ["'Yeah, let's go ahead and do away with Castro.'", "'No, the crisis is over: the world believes we won since it only knows the Soviets got scared and pulled back.'", "'Let's provoke the Soviets further with our victory.'"],
    answer: 1,
    background: "./../images/image-question-10.jpg",
  },
  {
    question: " ",
    options: [],
    background: "./../images/image-question-11.jpg",
  },


];



let currentQuizzIndex = 0;

function displayQuizz(index){
  var quizzGame = document.getElementById("question");
  quizzGame.querySelector("p").innerHTML = ironCurtainQuiz[index].question;
    if (index < 10) {
      document.getElementById("audio").play();
    }

  
  let list = ""
  
  ironCurtainQuiz[index].options.forEach(function(oneOption){
    list += `<li><button class="btn-answer"><i class='fas fa-hand-point-right'></i> ${oneOption}</button></li>`
  })
  
  document.body.style.background = `#719f60 url(${ironCurtainQuiz[index].background}) no-repeat right top`;
  document.body.style.backgroundPosition = "center";
  document.body.style.height = "100vh";
  quizzGame.querySelector("ul").innerHTML = list
  setAnwserListeners(index)
}

let score = 0

function restartGame() {
  const restartButton = document.getElementById("restart-btn")
  restartButton.classList.remove("hide")
}

const scoreDiv = document.getElementById("scoreContainer");

function scoreRender() {
  scoreDiv.style.display = "block";
  scoreDiv.innerHTML += "<p>Great! You were "+ score +"% closer to preserving world peace than to nuclear war.</p>";
  document.getElementById("next-btn").classList.add("hide");
  restartGame()
  document.getElementById("intro").classList.add("hide");
  document.getElementById('endaudio').play();
}


displayQuizz(currentQuizzIndex) // first question to appear

function setAnwserListeners(current) {
  const answerButtons = document.querySelectorAll(".btn-answer");
  let clicks = 0;
  answerButtons.forEach((btn,index) => {
    btn.onclick = (e) =>{
      if (clicks === 0) {
        if(verifyAnswer(ironCurtainQuiz[current],index)){
          btn.style.background = "green"
          score += 10
          new Audio('./../images/Trumpet.mp3').play()
        }else{
          btn.style.background = "red";
          new Audio('./../images/Bomb.mp3').play()
        }
        clicks ++
      } else {
        btn.setAttribute("disabled", "")
      }
    }
  }) 
  if (current === 10) {
    scoreRender(score)
  }
}

function verifyAnswer(quizz, index){
    if(quizz.answer === index){
      return true;
    }else {
      return false;
    }
}

const nextButton = document.getElementById('next-btn')

nextButton.addEventListener('click', () => {
  currentQuizzIndex++;
  displayQuizz(currentQuizzIndex) // display the question everytime somebody clicks on Next
})










/*
// Functions
function buildQuiz(){ ... }
function showResults(){ ... }

// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [ ... ];

// Kick things off
buildQuiz();

// Event listeners
submitButton.addEventListener('click', showResults);



function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
*/