//populating the quizBox with questionBox
var Q1 = '<div class="questionBox" id = "qBox1">'+'<button class="submit" id="Q1" onclick="questionOne()">Submit Q1</button>'+
'<p class="question">Why do people use \' Hello World \'?</p>'+'</div>'
var Q2 = '<div class="questionBox" id = "qBox2">'+'<button class="submit" id="Q2" onclick="questionTwo()">Submit Q2</button>'+
'<p class="question">Why do people use \' Hello World \'?</p>'+'</div>'
var Q3 = '<div class="questionBox" id = "qBox3">'+'<button class="submit" id="Q3" onclick="questionThree()">Submit Q3</button>'+
'<p class="question">Why do people use \' Hello World \'?</p>'+'</div>'
var Q4 = '<div class="questionBox" id = "qBox4">'+'<button class="submit" id="Q4" onclick="questionfour()">Submit Q4</button>'+
'<p class="question">Why do people use \' Hello World \'?</p>'+'</div>'
var Q5 = '<div class="questionBox" id = "qBox5">'+'<button class="submit" id="Q5" onclick="completeQuiz()">Submit Q5</button>'+
'<p class="question">Why do people use \' Hello World \'?</p>'+'</div>'
var congrats = '<div id="postGame" >' + 'Fin' + '</div>'
function webIntro() {
    document.getElementById('quizBox').innerHTML += Q1;
    document.getElementById('start').style.display = "none";
}

function questionOne() {
    document.getElementById('qBox1').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q2;
}
function questionTwo() {
    document.getElementById('qBox2').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q3;
}
function questionThree() {
    document.getElementById('qBox3').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q4;
}
function questionfour() {
    document.getElementById('qBox4').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q5;
}
function completeQuiz() {
    document.getElementById('qBox5').style.display = 'none';
    document.getElementById('quizBox').innerHTML += congrats
}


//This displays start button again 
//document.getElementById('start').style.display = 'block'

