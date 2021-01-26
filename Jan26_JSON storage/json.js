$("textarea").on("input", function (e) {
    var input = $("textarea").val();
    localStorage.setItem("input", input);
});

$("textarea").val(localStorage.getItem("input"));
