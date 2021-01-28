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

    $.ajax({
        url: "/ticker.json",
        method: "GET",
        success: function (responseData) {
            for (var i = 0; i < responseData.length; i++) {
                var link = "'" + responseData[i].href + "'";
                $("a").eq(i).attr("href", link);
                $("a").eq(i).attr("target", "_blank");
            }
        },
        error: function (err) {
            console.log("error in ajax:", err);
        },
    });
})();
