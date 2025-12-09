let calElements = document.querySelectorAll(".surprise");
let doormusic = document.querySelector("#doormusic")
let doorFrame = document.querySelector(".doorframe2");
let insideBlock = document.querySelector(".inside");

let realizeOne = document.querySelector("#realize1");
let preBlock = realizeOne.querySelector("pre.calendar");


const textOne = document.createElement("div");
textOne.className = 'caltext'
textOne.innerHTML = `
  it was in the days without it that you first felt how<br><br><br> the aftertaste lingered far longer than the fleeting pleasure
  <br>
  followed by a hollow fatigue
  <br>
  as if someone had scraped you clean from the inside
  <br>
`;
textOne.style.display = "none";
realizeOne.append(textOne);


realizeOne.addEventListener("mouseover", function () {
    preBlock.style.display = "none";
    textOne.style.display = "block"
});

let realizeTwo = document.querySelector("#realize2");
let preBlock2 = realizeTwo.querySelector("pre.calendar");
const textTwo = document.createElement("div");
textTwo.className = 'caltext'
textTwo.innerHTML = "<br><br>your life began to move according to the rythm of the door--when it appeard, when it didn't<br><br><br>the intervals between one visit and the next started to define your sense of time";
textTwo.style.display = "none";
realizeTwo.append(textTwo);

realizeTwo.addEventListener("mouseover", function () {
    preBlock2.style.display = "none";
    textTwo.style.display = "block";
});
let realizeThree = document.querySelector("#realize3");
let preBlock3 = realizeThree.querySelector("pre.calendar");
const textThree = document.createElement("div");
textThree.className = 'caltext'
textThree.innerHTML = "<br><br>this waiting exhausted you<br><br><br><br><br><br>perhaps it's finally time to stop";
textThree.style.display = "none";
realizeThree.append(textThree);

realizeThree.addEventListener("mouseover", function () {
    preBlock3.style.display = "none";
    textThree.style.display = "block";
});
let realizeFour = document.querySelector("#realize4");
let preBlock4 = realizeFour.querySelector("pre.calendar");

const textFour = document.createElement("div");
textFour.className = 'caltext';
textFour.style.display = "none";

textFour.innerHTML = `
  you did try to stop once<br><br> cramming your days with the most numbing<br>
  <a href="3.html" class="task-link">tasks</a><br>
  you could find<br><br> hoping the sheer dullness would smother even the faintest trace of it<br><br>
  keep it from slipping back into your dreams
`;

realizeFour.append(textFour);

realizeFour.addEventListener("mouseover", function () {
    preBlock4.style.display = "none";
    textFour.style.display = "block";
});


function activateCal(cal) {
    const insideBlock = document.querySelector("#insideBlock2");
    function showDoor() {
        doorFrame.classList.remove("hidden");
        doorFrame.classList.add("visible");
        insideBlock.classList.add("visible");
        insideBlock.style.visibility = "visible"
        insideBlock.classList.add("pulseAnimation");
        doormusic.currentTime = 0;
        doormusic.play();

    }
    function hideDoor() {
        doorFrame.classList.remove("visible");
        doorFrame.classList.add("hidden");

        insideBlock.classList.remove("visible");
        insideBlock.style.visibility = "hidden"
        insideBlock.classList.remove("pulseAnimation");
        void insideBlock.offsetHeight;

        doormusic.pause(); doormusic.currentTime = 0;
    }

    cal.addEventListener("mouseover", showDoor);
    cal.addEventListener("mouseout", hideDoor);
}
calElements.forEach(activateCal);

function getScrollPercentage() {
    let scrollTop = window.scrollY;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let percentage = (scrollTop / maxScroll) * 100;
    return percentage;
}

let thoughts = document.querySelectorAll('.thoughts');
let newThought = document.querySelector('#new-thought')
window.addEventListener("scroll", function () {
    let percentage = getScrollPercentage();
    console.log(percentage);

    if (percentage > 1.8) {
        thoughts.forEach(changeThoughts);
        newThought.style.opacity = 1;



    } else {
        thoughts.forEach(resetThoughts);
        newThought.style.opacity = 0;

    }
});

function changeThoughts(element) {
    element.style.filter = 'blur(3px)'
}
function resetThoughts(element) {
    element.style.filter = 'blur(0px)';
}
