# codingQuiz

## Description
A small quiz to test your Javascript skills.

![WebSnippet](/assets/images/webQuiz.PNG)
[Quiz](https://sambalogna.github.io/codingQuiz/)

## Key Coding Snippets
Example of one question
````Javascript
var Q1 = '<div class="questionBox" id = "qBox1">'+'<button class="submit" id="Q1" onclick="questionOne()">Submit Q1</button>'+
'<p class="question">Why do people use \'Hello World \'?</p>'+ '<input type="checkbox" id="Q1A1">'+
'<label for="answer1">A. To illustrate how coding works </label>' + '<br>' + '<input type="checkbox" id="Q1A2">' +
'<label for="answer2">B. As an introduction to coding </label>' + '<br>' + '<input type="checkbox" id="Q1A3">' +
'<label for="answer3">C. Both! </label>' + '<br>' +'</div>'
````
The timer is started from a button in html and each button thereafter is rendered by javasript
````Javascript
//click start to enter q1
function webIntro() {
    
    document.getElementById('quizBox').innerHTML += Q1;
    document.getElementById('start').style.display = "none";
    timerStart();
}

//click submit q1 to get to q2
function questionOne() {
    checkQ1();
    document.getElementById('qBox1').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q2;
}

````
Every question must be checked for double answers and the right answer. Then incrementing the score and removing the old posted score
````Javascript
function checkQ2() {
    if(document.getElementById('Q2A2').checked === true&& document.getElementById('Q2A1').checked != true && document.getElementById('Q2A3').checked != true) {
        console.log('success')
        scoreCount += 5
        removeOldScore();
        getScore();
    }
    else{
        console.log('you got the answer wrong')
        timeClock = timeClock-10;
    }
}
````



