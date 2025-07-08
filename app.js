let Gamesequence = [];
let Usersequence = [];
let level = 0;
let started = false;
let btnColors = ["red", "blue", "green", "yellow"];
let h2 = document.querySelector("h2");
let btn = document.querySelectorAll(".btn");
let color ; 

function levelup() {
    level++;
    h2.innerHTML = `Level ${level}`;
}

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelup();
        setTimeout(randomcolor(),1000)

    }
})

function randomcolor() {
    let randomnumber = Math.floor(Math.random() * 3);
    let randomcolor = btnColors[randomnumber];
    flash(randomcolor);
    Gamesequence.push(randomcolor);
    console.log( Gamesequence );
}


let bbtn = document.querySelector(".blue")
bbtn.addEventListener("click", function () {
    if(started == false) {
        alert("Press Any Key to Start the Game");
        return;
    }else {

    Usersequence.push("blue");
    console.log(`Usersequence: ${Usersequence}`);
    
  
    match();
    }

 
})
let rbtn = document.querySelector(".red")
rbtn.addEventListener("click", function () {
    if(started == false) {
        alert("Press Any Key to Start the Game");
        return;
    }else {
   
    Usersequence.push("red");
    console.log(`Usersequence: ${Usersequence}`);

    match();
    }
   

})
let gbtn = document.querySelector(".green")
gbtn.addEventListener("click", function () {
    if(started == false) {
        alert("Press Any Key to Start the Game");
        return;
    }else {
    Usersequence.push("green");
    console.log(`Usersequence: ${Usersequence}`);

    match();
    }
    
})

let ybtn = document.querySelector(".yellow")
ybtn.addEventListener("click", function () {
    if(started == false) {
        alert("Press Any Key to Start the Game");
        return;
    }else {
    Usersequence.push("yellow");
    console.log(`Usersequence: ${Usersequence}`);

    match();
    }
})

function flash(randomcolor) {
    let btn = document.querySelector(`.${randomcolor}`);
    btn.classList.add("background");
    setTimeout(function () {
        btn.classList.remove("background");
    }, 300);
}

function match() { 
    let idx = Usersequence.length - 1;
    if (Usersequence[idx] == Gamesequence[idx]) {
        console.log("correct");
        if (Usersequence.length === Gamesequence.length) {
            Usersequence = [];
            levelup();
            randomcolor();
        }
    } else {
        console.log("wrong");
        h2.innerHTML = `Game Over Score ${level - 1} Press Any Key to Restart`;
        let body = document.querySelector("body");
        body.classList.add("game-over");
        setTimeout(function () {
            body.classList.remove("game-over");
        }, 300);
        Gamesequence = [];
        Usersequence = [];
        level = 0;
        started = false;
    }
}

function userflash(color) {
    let btn = document.querySelector(`.${color}`);
    btn.classList.add("user-choice");
    setTimeout(function () {
        btn.classList.remove("user-choice");
    }, 300);
}
