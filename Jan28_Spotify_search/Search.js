(function () {
    var results = $(".results");
    var nextURL;
    $(".search").on("click", function () {
        getAndAppend("https://spicedify.herokuapp.com/spotify", true);
    });

    function getAndAppend(updatedURL, clicked) {
        $.ajax({
            method: "GET",
            url: updatedURL,
            data: {
                query: $("input").val(),
                type: $("select").val(),
            },

            cache: false,
            success: function (response) {
                var resultsHtml = "";
                response = response.artists || response.albums;
                var itemList = response.items;
                if (itemList.length > 1) {
                    $(".resultsof").html(
                        "<p> Results for " + $("input").val() + "</p>"
                    );
                } else {
                    $(".resultsof").html(
                        "<p> No results for " + $("input").val() + "</p>"
                    );
                }
                console.log(response);
                for (var i = 0; i < itemList.length; i++) {
                    resultsHtml +=
                        "<div><img src = " +
                        generateIMG(i) +
                        "><a href ='" +
                        itemList[i].external_urls.spotify +
                        "'>" +
                        itemList[i].name +
                        "</a></div>";
                }

                function generateIMG(i) {
                    if (itemList[i].images[0]) {
                        return itemList[i].images[0].url;
                    } else {
                        return "no-image-icon-6.png";
                    }
                }

                if (clicked) {
                    results.html(resultsHtml);
                } else {
                    results.append(resultsHtml);
                }

                if (response.next !== null) {
                    checkBottom();
                }
                nextURL =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
            },
        });
    }
    function checkBottom() {
        console.log("check");
        if (
            $(window).scrollTop() + $(window).height() >=
            $(document).height() - 300
        ) {
            if (location.search.indexOf("scroll=infinite") > -1) {
                getAndAppend(nextURL, false);
                console.log("fe");
            } else {
                $(".more").css({ visibility: "visible" });
                $(".more").click(function () {
                    getAndAppend(nextURL, false);
                });
            }
        } else {
            setTimeout(checkBottom, 1000);
            $(".more").css({ visibility: "hidden" });
        }
    }
})();
