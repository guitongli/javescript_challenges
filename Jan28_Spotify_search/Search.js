(function spotifySearch() {
    var results = $(".results");

    $("button").on("click", function () {
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: $("input").val(),
                type: $("select").val(),
            },
            success: function (response) {
                var itemList = response.artists.items || response.albums.items;

                var resultsHtml = "";
                for (var i = 0; i <= itemList.length; i++) {
                    resultsHtml += "<p>" + itemList[i].name + "</p>";
                }
                results.html(resultsHtml);
                console.log(results);
            },
        });
    });
})();
// I am sorry this is totally stucked with typeerror
