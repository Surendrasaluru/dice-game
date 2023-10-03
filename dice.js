var random1= Math.floor(Math.random()*6) +1;
var random2= Math.floor(Math.random()*6) +1;
var randomDiceImage="dice"+random1+".png";
var randomDiceImage2="dice"+random2+".png";
var randomImageSource1="images/"+randomDiceImage;
var randomImageSource2="images/"+randomDiceImage2;

document.querySelector(".img1").src=randomImageSource1;
document.querySelector(".img2").src=randomImageSource2;

if (random1>random2){
  document.querySelector("h1").textContent="Player 1 wins!";
}
else if (random1<random2){
  document.querySelector("h1").textContent="Player 2 wins!"
}
else{
  document.querySelector("h1").textContent="Its A TIE!";
}

