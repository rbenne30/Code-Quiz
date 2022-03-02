console.log("connected")
var startBtn =document.querySelector("#start-btn")
console.log (startBtn)
function startQuiz(){
    console.log("click")
    var questionsection= document.getElementById("questions");
    questionsection.classList.remove("hide")
}
startBtn.addEventListener("click" , startQuiz)