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

// **I didn't get time yesterday to go through this project...
// **will finish it and solve my questions today

// for (var i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", function (e) {
//         console.log(e.target.id.slice(3));
//         clearTimeout(timer);
//     });
// }
// for (var i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", function (e) {
//         for (var i = 0; i < dots.length; i++) {
//             if (dots[i] == e.target) {
//                 // we have a winner!
//                 console.log(i);
//                 break;
//             }
//         }
//         clearTimeout(timer);
//     });
// }
// for (var i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", getDotClickHandler(i));
// }

// function getDotClickHandler(i) {
//     return function () {
//         console.log(i);
//     };
// }
// for (var i = 0; i < dots.length; i++) {
//     (function (i) {
//         dots[i].addEventListener("click", function (e) {
//             console.log(i);
//             clearTimeout(timer);
//         });
//     })(i);
// }
