
var plus = document.querySelector(".plus")
var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")
var canceled = document.querySelector("#canceled")

plus.addEventListener("click", function () {
    overlay.style.display = "block"
    popup.style.display = "block"
})
canceled.addEventListener("click", function () {
    overlay.style.display = "none"
    popup.style.display = "none"
})

var container = document.querySelector(".container")
var added = document.querySelector("#added")
var bookname = document.querySelector("#bookname")
var authorname = document.querySelector("#authorname")
var description = document.querySelector("#description")


added.addEventListener("click", function () {
   
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${bookname.value}</h2>
                    <h5>${authorname.value}</h5>
                    <p>${description.value}</p>
                    <button onclick="del(event)">Delete</button>`
    container.append(div)
    overlay.style.display = "none"
    popup.style.display = "none"
})

function del(event){
    event.target.parentElement.remove()
}