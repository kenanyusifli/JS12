 let inp = document.getElementById("password");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    if (inp.getAttribute("type") === "password") {
        inp.setAttribute("type", "text")
    } else {
        inp.setAttribute("type", "password")
    }
});