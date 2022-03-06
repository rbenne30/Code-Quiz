

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
    console.log("answer")
    let intervalId = setInterval(handleClock,1000);
});

document.querySelector('.answers').addEventListener('click', (e)=> console.log(e.target.innerText));

// get current question object from array
var q0  = questions[0];

// update title with current question
var titleEl = document.getElementById("Inside which HTML element do we put the javascript");
titleEl.textContent = "Which variable(s) are considered global";


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