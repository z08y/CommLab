
let container= document.querySelector ("#container")
let button = document.createElement("p");
button.innerText = "started thinking";
button.onclick = function() {
  button.classList.add("shake");}

function next () {
    
    const newBox = document.createElement ('div');
    newBox.className = 'box';
    
    newBox.style.position = 'absolute';
    newBox.style.left = Math.random() *(window.innerWidth -100) + 'px';
    newBox.style.top  = Math.random() * (window.innerHeight - 100) + 'px';
    newBox.style.width = Math.random() * 100 + 100 + 'px';
    newBox.style.height = Math.random() * 100 + 100 + 'px';
   
    document.querySelector(".unwanted").remove();
    newBox.onclick = anotherOne;
    container. append (button);
    document.body.append(newBox);




}

function anotherOne (){const newBox2 = document.createElement ('div');
    newBox2.className = 'box2';
    newBox2.onclick =anotherTwo
    newBox2.style.position = 'absolute';
    newBox2.style.left = Math.random() *(window.innerWidth -100) + 'px';
    newBox2.style.top  = Math.random() * (window.innerHeight - 100) + 'px';
    newBox2.style.width = Math.random() * 100 + 100 + 'px';
    newBox2.style.height = Math.random() * 100 + 100 + 'px';
    
    document.body.style.background = "#8E9AC6";
   

    document.body.append(newBox2);

}

function anotherTwo (){const newBox3 = document.createElement ('div');
    newBox3.className = 'box3';
    newBox3.onclick =anotherThree
    newBox3.style.position = 'absolute';
    newBox3.style.left = Math.random() *(window.innerWidth -100) + 'px';
    newBox3.style.top  = Math.random() * (window.innerHeight - 100) + 'px';
    newBox3.style.width = Math.random() * 100 + 100 + 'px';
    newBox3.style.height = Math.random() * 100 + 100 + 'px';
   
    document.body.style.background = "#6d7698ff";
    document.body.append(newBox3);

}

function anotherThree (){const newBox4 = document.createElement ('div');
    newBox4.className = 'box4';
    newBox4.onclick =anotherThree
    newBox4.style.position = 'absolute';
    newBox4.style.left = Math.random() *(window.innerWidth -100) + 'px';
    newBox4.style.top  = Math.random() * (window.innerHeight - 100) + 'px';
    newBox4.style.width = Math.random() * 100 + 100 + 'px';
    newBox4.style.height = Math.random() * 100 + 100 + 'px';
    
    document.body.style.background = "#0c2062ff";
    document.body.append(newBox4);

}