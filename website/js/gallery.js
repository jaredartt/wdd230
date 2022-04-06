function viewGallery() {
    var element = document.getElementById("cards_obj");
    element.classList.remove("list")
    element.classList.add("gallery")

    var viewga = document.getElementById("viewg");
    var viewli = document.getElementById("viewl");
    viewga.classList.add("btn_select")
    viewli.classList.remove("btn_select")
}

var medium = window.matchMedia("(min-width: 35rem) and (max-width: 70rem)");

if(medium.matches) {
    var element = document.getElementById("cards_obj");
    element.classList.remove("gallery")
    element.classList.add("list")

    var viewga = document.getElementById("viewg");
    var viewli = document.getElementById("viewl");
    viewli.classList.add("btn_select")
    viewga.classList.remove("btn_select")
}