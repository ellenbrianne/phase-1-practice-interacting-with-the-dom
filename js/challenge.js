//Comment handling and listing

let form = document.getElementById("comment-form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let comments = form.querySelector("input").value
    let li = document.createElement("li")
    li.textContent = comments
    document.querySelector("#list").appendChild(li)
});