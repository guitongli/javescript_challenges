var cols = $(".col");
var currentPlayer = "player1";
var slots = $(".slot");

function switchPlayer() {
    if (currentPlayer === "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }
    return currentPlayer;
}

cols.on("click.gameBegins", function (e) {
    var colNumber = $(cols).index($(e.currentTarget));
    $(".cursor").removeClass(currentPlayer);
    $(".token")
        .eq(colNumber)
        .animate({ top: "450px" }, 1000, function () {
            $(this).removeAttr("style");
        });

    setTimeout(function () {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                vertical();
                horizontal();
                diagnal();
                diagnal2();
                switchPlayer();
                $(".effect").eq(colNumber).css({ visibility: "visible" });
                $(".cursor").addClass(currentPlayer);
                return;
            }
        }

        function vertical() {
            var counter = 0;
            for (var j = 0; j < slotsInCol.length - 1; j++) {
                if (slotsInCol.eq(j).hasClass(currentPlayer)) {
                    counter++;
                } else {
                    counter = 0;
                }
            }
            if (counter === 3) {
                alert(currentPlayer + " wins");
                slotsInCol.addClass("fly");
            }
        }
    }, 1000);
});

function horizontal() {
    for (var k = 0; k <= 23; k++) {
        if (
            slots.eq(k).hasClass(currentPlayer) &&
            slots.eq(k + 6).hasClass(currentPlayer) &&
            slots.eq(k + 12).hasClass(currentPlayer) &&
            slots.eq(k + 18).hasClass(currentPlayer)
        ) {
            alert(currentPlayer + " wins");
            slots.eq(k).addClass("fly");
            slots.eq(k + 6).addClass("fly");
            slots.eq(k + 12).addClass("fly");
            slots.eq(k + 18).addClass("fly");
        }
    }
}
function diagnal() {
    console.log("heck");
    for (
        var k = 3;
        (k >= 3 && k <= 5) ||
        (k >= 9 && k <= 11) ||
        (k >= 15 && k <= 17) ||
        (k >= 21 && k <= 23);
        k++
    ) {
        if (
            slots.eq(k).hasClass(currentPlayer) &&
            slots.eq(k + 5).hasClass(currentPlayer) &&
            slots.eq(k + 10).hasClass(currentPlayer) &&
            slots.eq(k + 15).hasClass(currentPlayer)
        ) {
            alert(currentPlayer + " wins");
            slots.eq(k).addClass("fly");
            slots.eq(k + 5).addClass("fly");
            slots.eq(k + 15).addClass("fly");
            slots.eq(k + 10).addClass("fly");
        }
    }
}
function diagnal2() {
    for (
        var k = 0;
        (k >= 0 && k <= 2) ||
        (k >= 6 && k <= 8) ||
        (k >= 12 && k <= 14) ||
        (k >= 18 && k <= 20);
        k++
    ) {
        if (
            slots.eq(k).hasClass(currentPlayer) &&
            slots.eq(k + 7).hasClass(currentPlayer) &&
            slots.eq(k + 14).hasClass(currentPlayer) &&
            slots.eq(k + 21).hasClass(currentPlayer)
        ) {
            alert(currentPlayer + " wins");
            slots.eq(k).addClass("fly");
            slots.eq(k + 7).addClass("fly");
            slots.eq(k + 14).addClass("fly");
            slots.eq(k + 21).addClass("fly");
        }
    }
}

$("button").on("click", function () {
    $(".slot").removeClass("player1");
    $(".slot").removeClass("player2");
    $(".slot").removeClass("fly");
    $(".effect").css({ visibility: "hidden" });
});

$("body").on("mousemove", function (e) {
    var relX = e.pageX - $(this).offset().left;
    var relY = e.pageY - $(this).offset().top;

    $(".cursor")
        .css({ left: relX + 10 + "px" })
        .css({ top: relY + 10 + "px" });
});

cols.on("mouseover", function (e) {
    var colNumber = $(cols).index($(e.currentTarget));
    $(".token")
        .eq(colNumber)
        .addClass(currentPlayer + "border");
});

cols.on("mouseout", function (e) {
    var colNumber = $(cols).index($(e.currentTarget));
    $(".token")
        .eq(colNumber)
        .removeClass(currentPlayer + "border");
});

$(window).keydown(function (e) {
    var order = 0;
    if (e.which === 49) {
        $(cols).eq(0).trigger("click.gameBegins");
    }
    if (e.which === 50) {
        $(cols).eq(1).trigger("click.gameBegins");
    }
    if (e.which === 51) {
        $(cols).eq(2).trigger("click.gameBegins");
    }
    if (e.which === 52) {
        $(cols).eq(3).trigger("click.gameBegins");
    }
    if (e.which === 53) {
        $(cols).eq(4).trigger("click.gameBegins");
    }
    if (e.which === 54) {
        $(cols).eq(5).trigger("click.gameBegins");
    }
    if (e.which === 55) {
        $(cols).eq(6).trigger("click.gameBegins");
    }
});
