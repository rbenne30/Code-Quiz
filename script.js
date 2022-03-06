

let clock = 60;
let qIndex = 0;

const questions = [
    'which Variable(s) are considered global',
    'Inside Which HTML element do we put the Javascript', 
    'Where is the correct place to insert a Javascript', 
    'The external Javascript file must contain the <script> tag.',
]

const ans = ['sum','js','the body section','true']


 
// startBtn.addEventListener("click", startBtn);
//rename the startBtn variables to be different and make them refer to the element they are capturing 
var startBtn = document.querySelector("#start-btn")
startBtn.addEventListener("click", function(){ 
    console.log("hello")
    let intervalId = setInterval(handleClock,1000);
});
var answersBtn = document.querySelector("#answerBtn")
answersBtn.addEventListener("click", )

document.querySelector('.answers').addEventListener('click', (e)=> console.log(e.target.innerText));

function handleClock() {
    document
        .querySelector('#time')
        .innerText = clock;
     //document.querySelector('#q'+qIndex).classList.remove('hide')
    qIndex++;
    clock--;
    if(clock<1) {
        clearInterval(intervalId);

    }
  
}