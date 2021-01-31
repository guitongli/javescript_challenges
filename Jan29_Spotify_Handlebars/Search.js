(function () {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    // var results = $(".results");

    $(".search").on("click", function () {
        getAndAppend("https://spicedify.herokuapp.com/spotify");
    });

    function getAndAppend(updatedURL) {
        $.ajax({
            method: "GET",
            url: updatedURL,
            data: {
                query: $("input").val(),
                type: $("select").val(),
            },

            cache: false,
            success: function (response) {
                // var resultsHtml = "";
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
                var showList = [];
                for (var i = 0; i < itemList.length; i++) {
                    // resultsHtml +=
                    //     "<div><img src = " +
                    //     generateIMG(i) +
                    //     "><a href ='" +
                    //     itemList[i].external_urls.spotify +
                    //     "'>" +
                    //     itemList[i].name +
                    //     "</a></div>";

                    constructObject(
                        itemList[i].name,
                        generateIMG(i),
                        itemList[i].external_urls.spotify
                    );
                }
                console.log(showList);
                var showShowList = { showList };
                $(".wrapper").append(
                    Handlebars.templates.results(showShowList)
                );

                function constructObject(name, image, link) {
                    var item = {
                        itemName: name,
                        itemImg: image,
                        itemLink: link,
                    };
                    showList.push(item);
                }

                function generateIMG(i) {
                    if (itemList[i].images[0]) {
                        return itemList[i].images[0].url;
                    } else {
                        return "no-image-icon-6.png";
                    }
                }

                // results.append(resultsHtml);
                if (response.next !== null) {
                    checkBottom();
                }
                function checkBottom() {
                    var nextURL =
                        response.next &&
                        response.next.replace(
                            "api.spotify.com/v1/search",
                            "spicedify.herokuapp.com/spotify"
                        );
                    console.log("check");
                    if (
                        $(window).scrollTop() + $(window).height() >=
                        $(document).height() - 300
                    ) {
                        if (location.search.indexOf("scroll=infinite") > -1) {
                            getAndAppend(nextURL);
                            console.log("fe");
                        } else {
                            $(".more").css({ visibility: "visible" });
                            $(".more").click(function () {
                                getAndAppend(nextURL);
                            });
                        }
                    } else {
                        setTimeout(checkBottom, 1000);
                        $(".more").css({ visibility: "hidden" });
                    }
                }
            },
        });
    }
})();
