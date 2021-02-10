(function () {
    var matches = [];
    var results = $(".results");
    $("input").on("input", function () {
        $("p").remove();
        matches = [];
        var written = $("input").val().toLowerCase();

        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: written,
            },
            success: function (response) {
                for (var i = 0; i <= response.length - 1; i++) {
                    if (response[i].toLowerCase().indexOf(written) === 0) {
                        matches.push(response[i]);
                        console.log(response[i]);
                    }
                    if (matches.length >= 4) {
                        break;
                    }
                    if (matches.length === 0) {
                        $("p").remove();
                    }
                }
                var htmlForFeedback = "";
                for (var j = 0; j < matches.length; j++) {
                    htmlForFeedback +=
                        "<p class = 'country'>" + matches[j] + "</p>";
                }
                results.append(htmlForFeedback);
            },
        });

        //results.html(htmlForFeedback)
    });

    results.on("mouseover.highlight", "p", function (event) {
        $(event.currentTarget).addClass("hovered");
        $("input").val($(event.currentTarget).text());
    });
    results.on("mouseleave", "p", function (event) {
        $(event.currentTarget).removeClass("hovered");
    });
    results.on("mousedown", "p", function (e) {
        $("input").val($(e.currentTarget).text());
        $("p").remove();
    });
    var pOrder = 0;
    $(window).on("keydown", function (e) {
        var ps = $("p");
        if (e.which === 40) {
            console.log(ps);
            ps.eq(pOrder).addClass("hovered");
            ps.eq(pOrder - 1).removeClass("hovered");
            $("input").val(ps.eq(pOrder).text());
            pOrder++;
            console.log(pOrder);

            if (pOrder === matches.length) {
                return (pOrder = 0);
            }
            return pOrder;
        }
        if (e.which === 38) {
            console.log(ps);
            pOrder--;
            ps.eq(pOrder).addClass("hovered");
            ps.eq(pOrder + 1).removeClass("hovered");
            $("input").val(ps.eq(pOrder).text());
            console.log(pOrder);
            if (pOrder == -matches.length) {
                pOrder = 0;
                return pOrder;
            }
            return pOrder;
        }
    });
    $(window).on("click", function () {
        if (!$("input").is(":focus")) {
            $("p").remove();
            console.log("2");
        }
    });

    // $("body").on("click", function (event) {
    //     event.stopPropagation();
    //     if($("input").hasFocus){
    //     $("input").blur();
    //     });
})();
