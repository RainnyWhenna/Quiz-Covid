var next = document.getElementById('next');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;
var question = document.querySelectorAll('.q_question');
var answer = document.querySelectorAll('.q_question .answer input');

next.addEventListener('click',function(){
    step();
    duration = 10
})

answer.forEach(function(answerSingle){
    answerSingle.addEventListener('click',function(){
        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount += 1;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }
    })
})

function step(){
    count += 1;
    for(var i = 0; i < question.length; i++){
        question[i].className= 'q_question';
    }
    question[count].className= 'q_question active';
    clearInterval(durationTime);
    countdown.innerHTML = 0;
}

var durationTime = setInterval(function(){
    if(duration == 10){
        duration = 0
    }
    duration +=1;
    countdown.innerHTML=duration;
    if(countdown.innerHTML == "10"){
        step()
    }
},1000);