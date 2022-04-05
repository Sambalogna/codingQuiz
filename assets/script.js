var Q1 = '<div>'+'<button class="question" id="Q1" onclick="questionOne()">Submit Q1</button>'+'<div>'
var Q2 = '<div>'+'<button class="question" id="Q2" onclick="questionTwo()">Submit Q2</button>'+'<div>'
var Q3 = '<div>'+'<button class="question" id="Q3" onclick="questionThree()">Submit Q3</button>'+'<div>'
var Q4 = '<div>'+'<button class="question" id="Q4" onclick="questionfour()">Submit Q4</button>'+'<div>'
var Q5 = '<div>'+'<button class="question" id="Q5" onclick="completeQuiz()">Submit Q5</button>'+'<div>'
var congrats = '<div id="postGame">' + 'Fin' + '</div>'
function webIntro() {
    document.getElementById('quizBox').innerHTML += Q1;
    document.getElementById('start').style.display = "none";
}

function questionOne() {
    document.getElementById('Q1').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q2;
}
function questionTwo() {
    document.getElementById('Q2').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q3;
}
function questionThree() {
    document.getElementById('Q3').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q4;
}
function questionfour() {
    document.getElementById('Q4').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q5;
}
function completeQuiz() {
    document.getElementById('Q5').style.display = 'none';
    document.getElementById('quizBox').innerHTML += congrats
}


//This displays start button again 
//document.getElementById('start').style.display = 'block'