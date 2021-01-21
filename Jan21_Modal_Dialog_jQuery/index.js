var hamburger = $("#menu");
var navBar = $(".nav-bar");
var cross = $(".x");
var overLay = $(".dark-chunk");
var dialog = $(".dialog");

function greeting() {
    overLay.css("visibility", "visible");
    dialog.css("visibility", "visible");
}
setTimeout(greeting, 1000);

cross.on("click", function () {
    navBar.addClass("off");
    overLay.css("visibility", "hidden");
    dialog.css("visibility", "hidden");
});

hamburger.on("click", function () {
    navBar.removeClass("off");
    navBar.addClass("on");
    overLay.css("visibility", "visible");
});

overLay.on("click", function () {
    navBar.addClass("off");
    overLay.css("visibility", "hidden");
    dialog.css("visibility", "hidden");
});
