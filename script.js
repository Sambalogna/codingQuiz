//populating the quizBox with questionBox
//Each answer input is ID'd question#answer#
var Q1 = '<div class="questionBox" id = "qBox1">'+'<button class="submit" id="Q1" onclick="questionOne()">Submit Q1</button>'+
'<p class="question">Why do people use \'Hello World \'?</p>'+ '<input type="checkbox" id="Q1A1">'+
'<label for="answer1">A. To illustrate how coding works </label>' + '<br>' + '<input type="checkbox" id="Q1A2">' +
'<label for="answer2">B. As an introduction to coding </label>' + '<br>' + '<input type="checkbox" id="Q1A3">' +
'<label for="answer3">C. Both! </label>' + '<br>' +'</div>'
var Q2 = '<div class="questionBox" id = "qBox2">'+'<button class="submit" id="Q2" onclick="questionTwo()">Submit Q2</button>'+
'<p class="question">What does an arrow function look like?</p>'+ '<input type="checkbox" id="Q2A1">'+
'<label for="answer1">A. FUNCTION(!)> </label>' + '<br>' + '<input type="checkbox" id="Q2A2">' +
'<label for="answer2">B. var thisIsAFunction = () => {} </label>' + '<br>' + '<input type="checkbox" id="Q2A3">' +
'<label for="answer3">C. function anotherFunction(){} </label>' + '<br>'+'</div>'
var Q3 = '<div class="questionBox" id = "qBox3">'+'<button class="submit" id="Q3" onclick="questionThree()">Submit Q3</button>'+
'<p class="question">What does a modulus operator do?</p>'+ '<input type="checkbox" id="Q3A1">'+
'<label for="answer1">A. returns the remainder of a division </label>' + '<br>' + '<input type="checkbox" id="Q3A2">' +
'<label for="answer2">B. returns null</label>' + '<br>' + '<input type="checkbox" id="Q3A3">' +
'<label for="answer3">C. gives you an answer to all your coding questions</label>' + '<br>'+'</div>'
var Q4 = '<div class="questionBox" id = "qBox4">'+'<button class="submit" id="Q4" onclick="questionfour()">Submit Q4</button>'+
'<p class="question">What are the methods that can split a string into an array then join them back into a string?</p>'+ '<input type="checkbox" id="Q4A1">'+
'<label for="answer1">A. .shift() & .includes()</label>' + '<br>' + '<input type="checkbox" id="Q4A2">' +
'<label for="answer2">B. .join() & .split()</label>' + '<br>' + '<input type="checkbox" id="Q4A3">' +
'<label for="answer3">C. .unshift() & .foreach()</label>' + '<br>'+'</div>'
var Q5 = '<div class="questionBox" id = "qBox5">'+'<button class="submit" id="Q5" onclick="completeQuiz(); stopTimer();">Submit Q5</button>'+
'<p class="question">Are booleans true or false?</p>'+'<input type="checkbox" id="Q5A1">'+
'<label for="answer1">A. True</label>' + '<br>' + '<input type="checkbox" id="Q5A2">' +
'<label for="answer2">B. False</label>' + '<br>' + '<input type="checkbox" id="Q5A3">' +
'<label for="answer3">C. Either or.</label>' + '<br>'+'</div>'
var congrats = '<div id="postGame" >' + 'Fin' + '</div>'

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

//click submit q2 to get to q3
function questionTwo() {
    checkQ2();
    document.getElementById('qBox2').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q3;
}

//click submit q3 to get to q4
function questionThree() {
    checkQ3();
    document.getElementById('qBox3').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q4;
}

//click submit q4 to get to q5
function questionfour() {
    checkQ4();
    document.getElementById('qBox4').style.display = 'none';
    document.getElementById('quizBox').innerHTML += Q5;
}

//click submit q5 to get to endpage
function completeQuiz() {
    checkQ5();
    document.getElementById('qBox5').style.display = 'none';
    document.getElementById('quizBox').innerHTML += '<button id="restart" onclick="restartTheQuiz()">Restart</button>'+congrats 
}
//restarting the game from end 
function restartTheQuiz() {
    document.querySelector('section').remove();
    document.querySelector('body').innerHTML += '<p id="countdown"></p>'
    document.querySelector('body').innerHTML += '<section id="quizBox">' + 
    '<button type="button" id="start" onclick="webIntro()">Start Quiz</button>' + '</section>'
}
//Next section runs checks
//check Q1 for correct answer
function checkQ1() {
    if(document.getElementById('Q1A3').checked === true) {
        console.log('success')
        scoreCount += 5
        getScore();
    }
    else{
        console.log('you got the answer wrong')
        timeClock = timeClock-10;
    }
}
//check Q2 for correct answer
function checkQ2() {
    if(document.getElementById('Q2A2').checked === true) {
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
//check Q3 for correct answer
function checkQ3() {
    if(document.getElementById('Q3A1').checked === true) {
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
//check Q4 for correct answer
function checkQ4() {
    if(document.getElementById('Q4A2').checked === true) {
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
//check Q5 for correct answer
function checkQ5() {
    if(document.getElementById('Q5A3').checked === true) {
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
var timerZone = document.getElementById('countdown');
//timer 
var timeClock = 120;
function timerStart(){
    
    var timeInterval = setInterval(function () {
    if(timeClock > 1){
        timerZone.textContent =  timeClock + ' seconds remaining'
        timeClock--;
    }else if (timeClock === 1){
        timerZone.textContent = timeClock + ' second remaining'
        timeClock--;
    }else{
        timerZone.textContent = '0 seconds remain'
        clearInterval(timeInterval);
    }
}, 1000);
}
function stopTimer() {
    document.getElementById('countdown').remove()
}
//highscore page
scoreCount = 0;
function removeOldScore(){
    document.getElementById('score').remove();
}
function getScore() {
document.getElementById('scoreboard').innerHTML += '<div id="score">' + scoreCount + '</div>'
}
