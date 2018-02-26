//Global vars
let textdiv = document.getElementById("text");
let leftArm = document.querySelector(".left-arm");
let rightArm = document.querySelector(".right-arm");
let leftLeg = document.querySelector(".left-leg");
let rightLeg = document.querySelector(".right-leg");
let head = document.querySelector(".head");


leftArm.style.transition = "all .5s";
rightArm.style.transition = "all .5s";
let i = 0;
let j = 0;
let text1 = "Press SPACE, W,A,S,D to make me dance."

//Event Listeners
window.addEventListener("keypress", myEventHandler, false);
window.onload = wave();

//Key Press Event Handler
function myEventHandler(e){
    var keyCode = e.which;
    console.log(keyCode);
    if(keyCode == 97){ 
        shuffleLeft();
    }
    if(keyCode == 100){ 
        shuffleRight();
    }
    if(keyCode == 32){ 
        headPop();
    }
    if(keyCode == 119){ 
        leftRocket();
    }
    if(keyCode == 115){ 
        rightRocket();
    }
}

//Talking
function greeting(){
    let delay = 100;
    
    let text = "Hi, my name is Ernie!"
    if (i < text.length) {
        textdiv.innerHTML += text.charAt(i);
        i++;
        return setTimeout(greeting, delay);
    }
    textdiv.innerHTML += '<br>';
    return command();
}

function command(){
    let delay = 100;
    if (j < text1.length) {
    textdiv.innerHTML += text1.charAt(j);
    j++;
    return setTimeout(command, delay);
    }
}

//Movements
function wave(){
    leftArm.style.transform = "rotate(140deg)";
    setTimeout(function(){leftArm.style.transform = "rotate(110deg)";},500)
    setTimeout(function(){leftArm.style.transform = "rotate(140deg)";},1000)
    setTimeout(function(){leftArm.style.transform = "rotate(110deg)";},1500)
    setTimeout(function(){leftArm.style.transform = "rotate(0deg)";},1600)
    return greeting();
}

function shuffleLeft(){
    leftLeg.style.transform = "translate(0,-30px)";
    setTimeout(function(){leftLeg.style.transform = "translate(0,0px)";},500) 
}

function shuffleRight(){
    rightLeg.style.transform = "translate(0,-30px)";
    setTimeout(function(){rightLeg.style.transform = "translate(0,0px)";},500) 
}

function headPop(){
    head.style.transform = "translate(0,-30px)";
    setTimeout(function(){head.style.transform = "translate(0,0px)";},500) 
}

function leftRocket(){
    leftArm.style.transform = "rotate(90deg)";
    setTimeout(function(){leftArm.style.transform = "translate(-100px,0px)";},700) 
    setTimeout(function(){leftArm.style.transform = "translate(-0px,0px)";},1000)
}

function rightRocket(){
    rightArm.style.transform = "rotate(-90deg)";
    setTimeout(function(){rightArm.style.transform = "translate(100px,0px)";},700) 
    setTimeout(function(){rightArm.style.transform = "translate(0px,0px)";},1000)
}
