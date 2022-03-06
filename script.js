

let clock = 60;
let qIndex = 0;

const questions = [
    "which Variable(s) are considered global",
    "Inside Which HTML element do we put the Javascript", 
    "Where is the correct place to insert a Javascript", 
    "The external Javascript file must contain the <script> tag.",
];
function myfunction(){
    var element = 
    document.getElementById("q0");
    element.classList.remove("hide");
}


const ans = ['sum','js','the body section','true']


var startBtn = document.querySelector("#q0")
startBtn.addEventListener("click", startBtn);

var startBtn = document.querySelector("#q2")
startBtn.addEventListener("click", startBtn);

document.querySelector('.answers').addEventListener('click', (e)=> console.log(e.target.innerText));

let intervalId = setInterval(handleClock,1000);

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