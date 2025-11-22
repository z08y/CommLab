let s = document.querySelector("span");
console.log(s)

function move (eventInfo){console.log ("mouse over");
    console.log (eventInfo);
    let element=eventInfo.target;
    element.style.color="red";
    let randomX=-50+Math.random ()*100;
    let randomY=-50+Math.random ()*100;
    element.style.transform = "translate(" + randomX + "px, " + randomY + "px)";

    
}

s.addEventListener("mousemove",move)

function addMover (element) {element.addEventListener ("mouseover", move)}
let allSpans = document.querySelectorAll("span");

allSpans.forEach( addMover)
