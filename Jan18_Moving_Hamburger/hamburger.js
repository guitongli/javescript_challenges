var hamburger = document.getElementById("menu");
var navBar = document.querySelector(".nav-bar");
var cross = document.querySelector(".x");
var overLay = document.querySelector(".dark-chunk");

cross.addEventListener("click", function () {
    navBar.classList.add("off");
    overLay.style.zIndex = -1;
});

hamburger.addEventListener("click", function () {
    navBar.classList.remove("off");
    navBar.classList.add("on");
    overLay.style.zIndex = 1000;
});

overLay.addEventListener("click", function () {
    navBar.classList.add("off");
    overLay.style.zIndex = -1;
});
