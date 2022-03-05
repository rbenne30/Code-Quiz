const quizEl = document.querySelector('.quiz');

let clock = 60;
let qIndex = 0;

const questions = [
    "which Variable(s) are considered global", 
    "Inside Which HTML element do we put the Javascript", 
    "Where is the correct place to insert a Javascript", 
    "The external Javascript file must contain the <script> tag.",
];

const ans = ['sum','js','the body section','true']

console.log("connected")
var startBtn = document.querySelector("#start-btn")
console.log(startBtn)

   
function startQuiz() {
    console.log("click")
    var questionsection = document.getElementById("questions");
    questionsection.classList.remove("hide")
    showQuestions()
}


startBtn.addEventListener("click", startQuiz)

document.querySelector('.answers').addEventListener('click', (e)=> console.log(e.target.innerText));

let intervalId = setInterval(handleClock,1000);

function handleClock() {
    document
        .querySelector('#time')
        .innerText = clock;
    // document.querySelector('#q'+qIndex).classList.remove('hide')
    qIndex++;
    clock--;
    if(clock<1) {
        clearInterval(intervalId);

    }
}