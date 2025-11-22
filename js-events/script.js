let myButton= document. querySelector ("#myButton");
let myInput = document.querySelector ("#myInput");
let myOutput = document.querySelector ("#myOutput")

function buttonClicked (eventInfo) {eventInfo.target.remove();
    document.body.style.backgroundColor="black";}
myButton.addEventListener ("mouseover", buttonClicked);


/*myButton.addEventListener ("click", function() {document.body.style.backgroundColor="black";});*/

function inputChanged (eventInfo){console.log (eventInfo.target.value);
    console.log ("input changed!");
myOutput.innerText= eventInfo.target.value;}
myInput.addEventListener ("change", inputChanged);

