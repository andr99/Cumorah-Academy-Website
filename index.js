let openButton = document.getElementById("open-search")
let searchSection = document.getElementById("search-sec")

openButton.onclick = function(){
    searchSection.classList.toggle("search-open");
}

let closeButton = document.getElementById("close-search")

closeButton.onclick = function(){
    searchSection.classList.toggle("search-open");
}