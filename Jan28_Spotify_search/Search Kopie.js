(function () {
    var matches = [];
    var results = $(".results");
    var written = $("input").val().toLowerCase();
    var artistOrAlbum = $("select").val();
    $("button").on("click", function () {
        $("p").remove();

        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: written,
                type: artistOrAlbum,
            },
            success: function (response) {
                response = response.artists || response.albums;
                var resultsHtml = ''
            }})
        //                 break;
        //             }
        //             if (matches.length === 0) {
        //                 $("p").remove();
        //             }
        //         }
        //         var htmlForFeedback = "";
        //         for (var j = 0; j < matches.length; j++) {
        //             htmlForFeedback +=
        //                 "<p class = 'country'>" + matches[j] + "</p>";
        //         }
        //         results.append(htmlForFeedback);
        //     },
        // });

        //results.html(htmlForFeedback)
    // });

    // results.on("mouseover.highlight", "p", function (event) {
    //     $(event.currentTarget).addClass("hovered");
    //     $("input").val($(event.currentTarget).text());
    // });
    // results.on("mouseleave", "p", function (event) {
    //     $(event.currentTarget).removeClass("hovered");
    // });
    // results.on("mousedown", "p", function (e) {
    //     $("input").val($(e.currentTarget).text());
    //     $("p").remove();
    // });
    // var pOrder = 0;
    // $(window).on("keydown", function (e) {
    //     var ps = $("p");
    //     if (e.which === 40) {
    //         console.log(ps);
    //         ps.eq(pOrder).addClass("hovered");
    //         ps.eq(pOrder - 1).removeClass("hovered");
    //         $("input").val(ps.eq(pOrder).text());
    //         pOrder++;
    //         console.log(pOrder);

    //         if (pOrder === matches.length) {
    //             return (pOrder = 0);
    //         }
    //         return pOrder;
    //     }
    //     if (e.which === 38) {
    //         console.log(ps);
    //         pOrder--;
    //         ps.eq(pOrder).addClass("hovered");
    //         ps.eq(pOrder + 1).removeClass("hovered");
    //         $("input").val(ps.eq(pOrder).text());
    //         console.log(pOrder);
    //         if (pOrder == -matches.length) {
    //             pOrder = 0;
    //             return pOrder;
    //         }
    //         return pOrder;
    //     }
    // });
    // $(window).on("click", function () {
    //     if (!$("input").is(":focus")) {
    //         $("p").remove();
    //         console.log("2");
    //     }
    // });

    // $("body").on("click", function (event) {
    //     event.stopPropagation();
    //     if($("input").hasFocus){
    //     $("input").blur();
    //     });
    })()