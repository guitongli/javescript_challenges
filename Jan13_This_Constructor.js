//1. sorry it doesn't seem correctly answering the requirements but it works on my console...

function Rectangle(width, height) {
    this.width,
        this.height,
        (this.getArea = function (width, height) {
            return this.width * this.height;
        });
}

function Square(param3) {
    (this.width = param3),
        (this.height = param3),
        (this.getArea = new Rectangle(param3, param3).getArea());
}

// 2.
function invertCase(string) {
    var chars = string.split("");

    for (var i = 0; i < chars.length; i++) {
        if (chars[i] == chars[i].toUpperCase()) {
            chars[i] = chars[i].toLowerCase();
        } else {
            chars[i] = chars[i].toUpperCase();
        }
    }
    return chars.join("");
}

// Bonus task: this doesn't run and I am stuck here.

function Countdown(arg) {
    this.start = function () {
        while (arg > 0) {
            console.log(arg);
            setTimeout(this.start, 1000);
            arg = arg - 1;
        }
    };
}
