(function () {
    var isValid;
    var textarea = $("textarea");
    var valid = $("#valid");
    var invalid = $("#invalid");

    textarea.on("input", function () {
        try {
            JSON.parse(textarea.val());
            if (!isValid) {
                isValid = true;
                valid.show();
                invalid.hide();
            }
        } catch (e) {
            if (isValid !== false) {
                isValid = false;
                invalid.show();
                valid.hide();
            }
        }
    });
})();
