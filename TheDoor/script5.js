let doorFrame1 = document.querySelector(".doorframe");
let insideBlock1 = document.querySelector(".inside");
let doormusic= document.querySelector("#doormusic")

let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let doorline= document.querySelectorAll(".doorLine")
text1.style.display="none"
text2.style.display="none"
text3.style.display="none"

let clicktext=document.querySelector(".clicktext")



doorFrame1.style.opacity = 1;


function doorClick() {
  
  doorFrame1.classList.add("open");
  insideBlock1.style.visibility = "visible";
  insideBlock1.style.display = "block";
  insideBlock1.style.opacity = 1;
  insideBlock1.classList.add("pulseAnimation");
  doormusic.currentTime = 0;
        doormusic.play();
       
}

doorFrame1.addEventListener("click", doorClick);

function originalMouseOut() {
  
  insideBlock1.style.opacity = 0;
  doorFrame1.style.opacity = 0;
  text1.style.display="block"
  text1.style.opacity = 1;
  doorFrame1.removeEventListener("click", doorClick);
  doorFrame1.classList.remove("open");

        doormusic.pause();doormusic.currentTime = 0;
  clicktext.addEventListener("click", showDoor);
}
function showDoor(){
   doorFrame1.removeEventListener("mouseout", originalMouseOut);
  text1.style.opacity=0;
  text1.style.display="none";
  document.querySelectorAll(".doorline").forEach(function(line) {
  line.style.color = "#3C3053";
});
  doorFrame1.style.display = "block";
  doorFrame1.style.opacity = 1;
  doorFrame1.classList.remove("open");
  doorFrame1.classList.add("door-colored");


  doorFrame1.addEventListener("click", firstClick);
  clicktext.removeEventListener("click", showDoor)
}
doorFrame1.addEventListener("mouseout", originalMouseOut);
function firstClick() {
 
  createDoor();
  doormusic.currentTime = 0;
        doormusic.play();
};

let doorCount = 0;
let boredCount=0;

function createDoor() {
  console.log("door clicked", doorCount);
  doorCount = doorCount + 1;
  if (doorCount <= 40) {
    const newDoor = document.createElement("div");
  newDoor.innerHTML = `
    <pre>
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoord( )d
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
      :doordooordoordoord
    </pre>`;

  newDoor.classList.add("newdoorframe");
  newDoor.style.position = "absolute";
  newDoor.style.left = Math.random() * (window.innerWidth - 100) + "px";
  newDoor.style.top = Math.random() * (window.innerHeight - 100) + "px";
  newDoor.style.width = Math.random() * 100 + 100 + "px";
  newDoor.style.height = Math.random() * 100 + 100 + "px";
  newDoor.onclick = createDoor;
  document.body.append(newDoor);
doormusic.currentTime = 0;
        doormusic.play();doormusic.loop=true;
  } else {
  console.log("bored clicked", boredCount);
  boredCount = boredCount + 1;
  if (boredCount <= 40) {
    const boredDoor = document.createElement("div");
  boredDoor.innerHTML = `
    <pre>
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredbore( )d
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
      :boredboredboredbor
    </pre>`;

  boredDoor.classList.add("boreddoorframe");
  boredDoor.style.position = "absolute";
  boredDoor.style.left = Math.random() * (window.innerWidth - 100) + "px";
  boredDoor.style.top = Math.random() * (window.innerHeight - 100) + "px";
  boredDoor.style.width = Math.random() * 100 + 120 + "px";
  boredDoor.style.height = Math.random() * 100 + 120 + "px";
  boredDoor.onclick = createDoor;
  document.body.append(boredDoor);doormusic.currentTime = 0;
        doormusic.play();doormusic.loop=true; doormusic.playbackRate=0.5
  }

  if (boredCount>= 40){
      
        doormusic.pause();
    document.querySelectorAll('.newdoorframe, .boreddoorframe').forEach(function(doors){doors.remove()});
    doorFrame1.style.display="none";
     setTimeout(function() {
    text2.style.display = "block";
    text2.style.visibility = "visible";
    text2.style.opacity = 1;
  }, 3000);

     text2.addEventListener("click", function(){
     
      text2.classList.add("sandfade");
      text2.addEventListener("animationend", function(){
         text2.style.display="none";
    text3.style.display="block";
    text3.style.visibility="visible";
    text3.style.opacity=1;
      })
     })
   
  }
  }
}










