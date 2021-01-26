$("button").on("click", function (e) {
    var input = $("textarea").val();
    try {
        var parsedObj = JSON.parse(input);
    } catch (err) {
        alert(err);
    }
});
