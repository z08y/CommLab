let mySound= document.querySelector ("#mySound");
let playButton= document.querySelector ("#playButton");
let pauseButton= document.querySelector ("#pauseButton");
let speedButton= document.querySelector ("#speedButton");
let soundSpeed = 1;
let slowButton= document.querySelector ("#slowButton");
playButton.addEventListener ("click", function() {
    mySound.loop= true;
    mySound.play();});
pauseButton.addEventListener ("click", function() {mySound.pause();});
speedButton.addEventListener ("click", function() {
    soundSpeed= soundSpeed*1.1;
    mySound.playbackRate= 10;});
 slowButton.addEventListener ("click", function() { 
    soundSpeed= soundSpeed*0.9;
    mySound.playbackRate= soundSpeed;}) 