(function translateNumberToGerman() {
    var translation = {
        1: "eins",
        2: "zwei",
        3: "drei",
        4: "vier",
        5: "fuenf",
        6: "sechs",
        7: "sieben",
        8: "acht",
        9: "neuen",
        10: "zehn",
    };
    console.log(translation[1]);
    try {
        askForNumber();
        function askForNumber() {
            var num = prompt("Please enter a number between 1 and 10");
            if (num >= 1 && num <= 10 && num == parseInt(num)) {
                alert(translation[num]);
                return num;
            }
            throw new Error("Bad number");
        }
    } catch (err) {
        translateNumberToGerman();
    }
})();
