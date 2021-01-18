// it doesn't run automatically when I open the html file
// the end of the ticker always gets filled up some seconds delayed

(function () {
    console.log("ticker goes left");

    var news = document.getElementsByTagName("a");
    var newsTrain = document.getElementById("wrapper");
    var ticker = document.getElementById("ticker");
    var curX = newsTrain.offsetLeft;
    var animID;

    function moveNews() {
        curX--;
        if (curX <= -news[0].offsetWidth) {
            curX += news[0].offsetWidth;

            newsTrain.appendChild(news[0]);
        }

        newsTrain.style.left = curX + "px";
        animID = requestAnimationFrame(moveNews);
    }
    moveNews();

    ticker.addEventListener("mouseenter", function () {
        cancelAnimationFrame(animID);
    });
    ticker.addEventListener("mouseleave", function () {
        moveNews();
    });
})();
