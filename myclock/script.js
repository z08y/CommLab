
let hourPanes = document.querySelectorAll(".hours .pane");
let minutePanes = document.querySelectorAll(".minutes .pane");
let secondPanes = document.querySelectorAll(".seconds .pane");
let pulseSound = document.querySelector("#pulse");

document.querySelector("#playBtn").addEventListener("click", function () {
  let pulseSound = document.querySelector("#pulse");

  if (pulseSound.paused) {
    pulseSound.play();
  } else {
    pulseSound.pause();
  
  }
});

function lightUp(panes, count) {
  for (let i = 0; i < panes.length; i++) {
    if (i < count) {
      panes[i].style.backgroundColor = "#dfe1feff";
      panes[i].style.filter = "blur(6px)";
    } else {
      panes[i].style.backgroundColor = "#000000ff";
     
    }
  }
}

function getTheTime() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  lightUp(hourPanes, h);
  lightUp(minutePanes, m);
  lightUp(secondPanes, s);
}

setInterval(getTheTime, 1000);
