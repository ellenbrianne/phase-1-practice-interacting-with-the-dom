//Comment handling and listing

let form = document.getElementById("comment-form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let comments = form.querySelector("input").value
    let li = document.createElement("li")
    li.textContent = comments
    document.querySelector("#list").appendChild(li)
    form.reset();
});

// Counter function w/setInterval

let counterDisplay = document.querySelector("h1#counter");

let counter = 0;

let myInterval = setInterval(countUp, 1000)

// Manually inc/decrement counter w/buttons

let plus = document.getElementById("plus");

function countUp () {
    counterDisplay.textContent++;
};

plus.addEventListener("click", countUp);

let minus = document.getElementById("minus");

function countDown () {
    counterDisplay.textContent--;
};

minus.addEventListener("click", countDown);

// Like button for numbers & log of liked numbers

let liker = document.getElementById("heart");

function liking () {
    let li = document.createElement("li")
    li.textContent = `Number ${counterDisplay.textContent} has been liked.`
    let ul = document.querySelector("ul.likes").appendChild(li)
};

liker.addEventListener("click", liking);

// Pause/disable & resume/enable

let pause = document.getElementById("pause");

function disabler () {
    if (pause.textContent === "pause") {
        clearInterval(myInterval)
        plus.disabled = true
        minus.disabled = true
        liker.disabled = true
        pause.textContent = "resume"
    } else {
        myInterval = setInterval(countUp, 1000)
        plus.disabled = false
        minus.disabled = false
        liker.disabled = false
        pause.textContent = "pause"
    }
};

pause.addEventListener("click", disabler);