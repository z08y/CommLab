
function getScrollPercentage() { 
  let scrollTop = window.scrollY;
  let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  return (scrollTop / maxScroll) * 100;
}

let doorFrame = document.querySelector(".doorframe");
let insideBlock = document.querySelector(".inside"); 
let doormusic = document.querySelector("#doormusic");
doorFrame.style.cursor = "default"; 


const wakeUpLink = document.createElement("a");
wakeUpLink.href = "2.html";
wakeUpLink.className = "next-link";
wakeUpLink.textContent = "wake up"; 
document.body.appendChild(wakeUpLink);



window.addEventListener("scroll", function() {
  let percentage = getScrollPercentage();
  console.log(percentage);

  if (percentage < 89) {
    doorFrame.style.opacity = percentage / 100;
    doorFrame.style.pointerEvents = "none";
    document.querySelector("#body2p").style.color = "#524171";
   doorFrame.style.cursor = "none";
    insideBlock.style.opacity = 0;
    insideBlock.style.pointerEvents = "none";
   
     doormusic.pause();
  doormusic.currentTime = 0;
  } else {
    doorFrame.style.opacity = 1;
    doorFrame.style.cursor = "pointer";
    doorFrame.style.pointerEvents = "auto"; 
    document.querySelector("#body2p").style.opacity = 0;
    document.body.style.backgroundColor = "black";
   
  }
});

doorFrame.addEventListener("click", function() {
 
 let percentage = getScrollPercentage();
  if (percentage < 89) return; 
  doormusic.currentTime = 0;
  doormusic.play();

  doorFrame.classList.add("open");
  insideBlock.style.opacity = 1;
  insideBlock.style.display = "block";
  insideBlock.classList.add("pulseAnimation");
});

doorFrame.addEventListener("mouseout", function() {
  insideBlock.style.opacity = 0;
  doormusic.pause();
  doormusic.currentTime = 0;
  

  if (doorFrame.classList.contains("open")) {
    wakeUpLink.style.display = "block";
  }
});


