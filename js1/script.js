let name = "leon";
let temperature =16;
let headline = document.querySelector("h1");
let button = document.querySelector("button").innerText = "just a button"
/*document.querySelector("h1").innerText = "tried it, didn't like it."*/


alert("Hi " +name + " It's "+ temperature + " degrees outside");

temperature = 20;

alert ("now it's " + temperature + " degrees");

console.log ("the temperature is " + temperature + " degrees");

function domanythings () {console.log ("button clicked"); alert ("Hi " + name );
    button.innerText="just a button"
}
function greet (greeting) {console.log ("received: "+ greeting); alert (greeting + " " + name);
    headline.innerText = "tried it, didn't like it."}

let myText = document.querySelector (".myText");
function changeText (){console.log ("click the button");
    myText.innerText= "huh"
}    