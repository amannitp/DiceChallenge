var rollingDice1= Math.floor(Math.random()*6)+1; // number between 1 to 6 including 6
var rollingDiceImg1="/dice"+rollingDice1+".png"; // /dice1-/dice6.png
var rollingDiceImgSrc1="./images"+rollingDiceImg1; // ./images/dice1-./imagesdice6.png

var img1=document.getElementById('img1'); // 
img1.setAttribute("src",rollingDiceImgSrc1);

var rollingDice2= Math.floor(Math.random()*6)+1; // number between 1 to 6 including 6
var rollingDiceImg2="/dice"+rollingDice2+".png"  // /dice1-/dice6.png
var rollingDiceImgSrc2="./images"+rollingDiceImg2;// ./images/dice1-./imagesdice6.png

var img2=document.getElementById("img2");
img2.setAttribute('src',rollingDiceImgSrc2);


// player 1 win
if(rollingDice1 > rollingDice2){
    document.getElementsByTagName('h1')[0].innerHTML="Player 1 Wins!";
}
//player 2 win
else if(rollingDice1<rollingDice2){
    document.getElementsByTagName('h1')[0].innerHTML="Player 2 Wins!"
}
// draw
else{
    document.getElementsByTagName('h1')[0].innerHTML="Draw!"
}

rollingDiceImgSrc1="./images/dice6.png";
rollingDiceImgSrc2="./images/dice6.png";

setInterval("refresh()",5000);

function refresh(){
    document.getElementsByTagName('h1')[0].innerHTML="Refresh Me";
    img1.setAttribute("src",rollingDiceImgSrc1);
    img2.setAttribute("src",rollingDiceImgSrc2);
}