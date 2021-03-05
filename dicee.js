var random1 = Math.floor(Math.random()*6) +1;
var random2 = Math.floor(Math.random()*6) +1;

var image1Src = "images/dice" + random1 + ".png";
var image2Src = "images/dice" + random2 + ".png";

var IMAGE1 = document.querySelector('.img1').setAttribute('src', image1Src);
var IMAGE2 = document.querySelector('.img2').setAttribute('src', image2Src);

var heading = document.querySelector('h1');

if(random1 > random2){
    heading.innerHTML = "player 1 wins";
}else if(random1 < random2){
    heading.innerHTML = "player 2 wins";
}else {
    heading.innerHTML = "they are equal";
}
   
   