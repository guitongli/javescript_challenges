(function () {
    var kitties = document.getElementsByTagName("img");
    var currentKitty = 0;
    function moveKitties() {
        kitties[currentKitty].classList.remove("on");
        kitties[currentKitty].classList.add("off");
        currentKitty++;
        kitties[currentKitty].classList.add("on");
        setTimeout(moveKitties, 5000);
    }
    setTimeout(moveKitties, 1000);

    document.addEventListener("transitionend", function (e) {
        console.log("transition ended....", e.target.classList);
    });
})();
