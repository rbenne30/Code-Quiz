const questions = [
    "which Variable(s) are considered global", 
    "Inside Which HTML element do we put the Javascript", 
    "Where is the correct place to insert a Javascript", 
    "The external Javascript file must contain the <script> tag.",
];
const questionsTwo = [
    {
      questionTitle:   "which Variable(s) are considered global", 
      choiceA: "input",
      choiceB: "input and sum",
      choiceC: "sum",
      choiceD: "sum num",
    
    },
    {
        questionTitleTwo: "inside Which HTML element do we put the Javascript", 
        choiceA: "<js>",
        choiceB: "<script>",
        choiceC: "<scripting>",
        choiceD: "<javascript>",
    },
]

console.log("connected")
var startBtn = document.querySelector("#start-btn")
console.log(startBtn)
function showQuestions (){
    var questionTitle = document.querySelector("#question-title")
    console.log(questionTitle)
    questionTitle.textContent = questionsTwo[0].questionTitle
    var buttonA = document.querySelector("#choiceA")
    console.log(buttonA)
    buttonA.textContent = questionsTwo[0].choiceA
    console.log(questions[0])
    var buttonB = document.querySelector("#choiceB")
    buttonB.textContent = questionsTwo[0].choiceB
    var buttonC = document.querySelector("#choiceC")
    buttonC.textContent = questionsTwo[0].choiceC
    var buttonD = document.querySelector("#choiceD")
    buttonD.textContent = questionsTwo[0].choiceD
    
    var questionTitleTwo = document.querySelector("#question-titletwo")
    console.log(questionTitleTwo)
    questionTitleTwo.textContent = questionsTwo[1].questionTitleTwo
    var buttonE = document.querySelector("choiceE")
    buttonE.textContent = questionsTwo[1].choiceE
    var buttonF = document.querySelector("choiceF")
    buttonF.textContent = questionsTwo[1].choiceF
    var buttonG = document.querySelector("choiceG")
    buttonG.textContent = questionsTwo[1].choiceG
    var buttonH = document.querySelector("choiceH")
    buttonH.textContent = questionsTwo[1].choiceH

}
function startQuiz() {
    console.log("click")
    var questionsection = document.getElementById("questions");
    questionsection.classList.remove("hide")
    showQuestions()
}

startBtn.addEventListener("click", startQuiz)

