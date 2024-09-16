let h3 = document.querySelector("h3");
let level = 0;
let start = false;
let divs = ["div1", "div2", "div3", "div4"];
let gameSeq = [];
let userSeq = [];


function flash(randomBtn) {
    randomBtn.classList.add("flash");
    setTimeout(function () {
        randomBtn.classList.remove("flash");
    }, 50)
}


function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random() * divs.length);
    let randomDiv = divs[randomIndex];
    let randomBtn = document.querySelector(`.${randomDiv}`);
    gameSeq.push(randomDiv);
    flash(randomBtn);
}


function chkAns(index) {
    if (gameSeq[index] === userSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    }
    else {
        h3.innerHTML = `Game Over ! <b>Your score is ${level}</b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200)
        start = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
    }
}


function btnRespond() {
    if (!start) return;
    flash(this);
    userSeq.push(this.getAttribute("id"));
    chkAns(userSeq.length-1);
}



document.addEventListener("keypress", function () {
    if (start == false) {
        start = true;

        levelUp();
    }

})


let allBtns = document.querySelectorAll(".box")
for (btn of allBtns) {
    btn.addEventListener("click", btnRespond)
}