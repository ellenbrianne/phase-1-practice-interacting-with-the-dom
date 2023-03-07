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

setInterval(() => {
    counter++
    counterDisplay.textContent = counter
}, 1000);

// Manually inc/decrement counter w/buttons

let plus = document.getElementById("plus");

plus.addEventListener("click", (e) => {
    counterDisplay.textContent++;
});

let minus = document.getElementById("minus");

minus.addEventListener("click", (e) => {
    counterDisplay.textContent--;
});

// Like button for numbers & log of liked numbers

let liker = document.getElementById("heart");

liker.addEventListener("click", (e) => {
    let li = document.createElement("li")
    li.textContent = `Number ${counterDisplay.textContent} has been liked.`
    let ul = document.querySelector("ul.likes").appendChild(li)
});

