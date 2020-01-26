var startBtn = document.getElementById("start");
var display = document.getElementById("container-question");
var que = document.getElementById("question");
var ans = document.getElementById("answers");
var shuffle, current;

startBtn.addEventListener("click", gameStarts)

function gameStarts() {
    console.log("Started");
    startBtn.classList.add("hide");
    shuffle = questions.sort(() => Math.random() - .5);
    current = 0;
    display.classList.remove("hide");
    nextQuestion();

};

function nextQuestion() {
    reset();
    Questions(shuffle[current]);
};

function Questions(question) {
    console.log(question);
    que.innerText = question.que;

    question.choices.forEach(answer => {
        var button = document.querySelector("#button");
        button.innerText = answer.ans;

        if (answer.answer) {
            button.dataset.answer = answer.answer;
        }
        button.addEventListener("click", answerSelected);
        ans.appendChild(button);
    });
};

function reset(){


}

function answerSelected() {

};







var questions = [
    {
        que: "Commonly used data types DO NOT include:",
        choices: [{ ans: "strings" }, { ans: "booleans" }, { ans: "alerts" }, { ans: "numbers" }],
        answer: "alerts"
    },
    {
        que: "The condition in an if / else statement is enclosed within ____.",
        choices: [{ ans: "quotes" }, { ans: "curly brackets" }, { ans: "parentheses" }, { ans: "square brackets" }],
        answer: "parentheses"
    },
    {
        que: "Inside which HTML element do we put the JavaScript?",
        choices: [{ ans: "<js>" }, { ans: "<javascript>" }, { ans: "<scripting>" }, { ans: "<script>" }],
        answer: "<script>"
    },
    {
        que: "Which event occurs when the user clicks on an HTML element?",
        choices: [{ ans: "onmouseclick" }, { ans: "onmouseover" }, { ans: "onchange" }, { ans: "onclick" }],
        answer: "onclick"
    },
    {
        que: "How do you declare a Javascript variable?",
        choices: [{ ans: "variable carName" }, { ans: "var carName" }, { ans: "v carName" }, { ans: "const carname" }],
        answer: "var carName"
    },
    {
        que: "How do you round the number 7.5, to the nearest integer?",
        choices: [{ ans: "Math.round(7.5)" }, { ans: "rnd(7.5)" }, { ans: "Math.rnd(7.5)" }, { ans: "round(7.5)" }],
        answer: "Math.round(7.5)"
    },
    {
        que: "What does CSS stand for?",
        choices: [{ ans: "Computer Style Sheets" }, { ans: "Creative Style Sheets" }, { ans: "Colorful Style Sheets" }, { ans: "Cascading Style Sheets" }],
        answer: "Cascading Style Sheets"
    },
    {
        que: "Which HTML attribute is used to define inline styles?",
        choices: [{ ans: "class" }, { ans: "font" }, { ans: "styles" }, { ans: "style" }],
        answer: "style"
    },
    {
        que: "Which CSS property is used to change the text color of an element?",
        choices: [{ ans: "text-color" }, { ans: "color" }, { ans: "fgcolor" }, { ans: "font-color" }],
        answer: "color"
    },
    {
        que: "Which CSS property controls the text size?",
        choices: [{ ans: "font-style" }, { ans: "text-style" }, { ans: "text-size" }, { ans: "font-size" }],
        answer: "font-size"
    },
];