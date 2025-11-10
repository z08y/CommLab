/*let container= document.querySelector ("#container")
let headline= document.createElement ("h5");
headline. innerText= "welcome to my page";
//document.body.append (headline)
container. append (headline)*/
let container= document.querySelector ("#container")
let headline= document.createElement ("h5");
headline. innerText= "welcome to my page";
//document.body.append (headline)
function greet() {
container. append (headline);
document.querySelector (".notwanted").remove()
}
function moveBox() {
    container.classList.toggle("move");
    let r1=Math.random ();
    console.log (r1);
    let r2= Math.random () *100;
    console.log (r2);
    let r3= 10+ Math.random()*10;
    let r4= Math.floor(r3);
    console.log (r4);
    document.querySelector(".notwanted").style.fontSize = r2+"px";
}
