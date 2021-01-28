(function () {
    var news = $("a");
    var newsTrain = $("#wrapper");
    var ticker = $("#ticker");
    var curX = newsTrain.offset.left;
    var animID;

    function moveNews() {
        newsTrain.animate({ left: "-=1px" }, 1);
        if (curX <= -news[0].offsetWidth) {
            curX += news[0].offsetWidth;

            newsTrain.appendChild(news(0));
        }

        newsTrain.css.left = curX + "px";
        animID = requestAnimationFrame(moveNews);
    }
    moveNews();

    ticker.on("mouseenter", function () {
        cancelAnimationFrame(animID);
    });
    ticker.on("mouseleave", function () {
        moveNews();
    });
})();
