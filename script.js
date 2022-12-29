'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

document.querySelector('.check').addEventListener('click',function(){
const guessNumber=Number(document.querySelector('.guess').value);
if(!guessNumber){
    document.querySelector('.message').textContent='No Number';
}
else if(guessNumber===secretNumber){
    document.querySelector('.message').textContent='🏆 Correct Number';
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').style.width='30rem';
    score++;
    document.querySelector('.score').textContent=score;
    if(score>highScore)
    {
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
    secretNumber=Math.trunc(Math.random()*20)+1;
}
else if(guessNumber>secretNumber){
    if(score>0)
   { score--;
    document.querySelector('.message').textContent='📈 to high';
    document.querySelector('.score').textContent=score;
   }
   else
   {
    document.querySelector('.message').textContent='You lost the game';
    document.querySelector('.check').disabled=true;
   }
}
else if (guessNumber<secretNumber){
    if(score>0)
    {score--;
    document.querySelector('.message').textContent='📉 to low';
    document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent='You lost the game';
        document.querySelector('.check').disabled=true;
    }
}
})

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.check').disabled=false;
    secretNumber=Math.trunc(Math.random()*20)+1;
})