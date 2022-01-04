var score=document.querySelector(".correct").innerText;
setTimeout(function(){
    document.querySelector(".countdown").innerHTML = "The dice will change in 5 seconds! Guess The next number on DICE";
    document.querySelector(".checkGuess").innerText="";
}, 2000);
function present(nextDice){
  document.querySelector(".btn1").addEventListener('click',function(){
    document.querySelector(".clickedButton").innerText=1;
  });
  document.querySelector(".btn2").addEventListener('click',function(){
    document.querySelector(".clickedButton").innerText=2;
  });
  document.querySelector(".btn3").addEventListener('click',function(){
    document.querySelector(".clickedButton").innerText=3;
  });
  document.querySelector(".btn4").addEventListener('click',function(){
    document.querySelector(".clickedButton").innerText=4;
  });
  document.querySelector(".btn5").addEventListener('click',function(){
    document.querySelector(".clickedButton").innerText=5;
  });
  document.querySelector(".btn6").addEventListener('click',function(){
    document.querySelector(".clickedButton").innerText=6;
  });
  var clicked=document.querySelector(".clickedButton").innerText;
  if(clicked == 0){
    document.querySelector(".checkGuess").innerText="Make A Guess";
  }
  else if(nextDice == clicked){
    document.querySelector(".checkGuess").innerText="Your Guess Was Correct";
    score++;
    document.querySelector(".correct").innerText=parseInt(score);
  }else{
    document.querySelector(".checkGuess").innerText="Your Guess Was Incorrect";
  }
}
function change(){
  document.querySelector(".checkGuess").innerText="";
  var nextDice=parseInt(Math.random()*6+1);
  var image="images/dice"+nextDice+".png";
  var index=5;

  setTimeout(change, 5000);
  var downloadTimer = setInterval(function(){
    if(index <= 0){
      clearInterval(downloadTimer);
      document.querySelector(".countdown").innerText = "The dice will change in "+ index +" seconds! Guess The next number on DICE";
    } else {
        document.querySelector(".countdown").innerText = "The dice will change in "+ index +" seconds! Guess The next number on DICE";
    }
    index-=1;
  }, 1000);

  score=document.querySelector(".correct").innerText;
  present(nextDice);
  document.querySelector(".image").src=image;
}
window.onload = change();
