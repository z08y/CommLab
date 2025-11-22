let firstButton= document.querySelector("#firstButton");


/*function clickedButton() {
    console.log ("clicked")
    let b = document.createElement ("button");
    b.innerText ="what";
    b.onclick =
    document.body.append (b);
}*/

function colorize (elm) {
    elm.style.backgrounColor= "red";
}

function clickedButton (){
    let b= document.querySelector (".box");
    colorize (b);
    console.log (b);
    let bs= document.querySelectorAll (".box");
    console.log(bs);
    bs.forEach (colorize);
}