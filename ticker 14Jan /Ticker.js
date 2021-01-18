var news = document.getElementsByTagName("a");
var newsTrain = document.getElementById("wrapper");
var lineStart = newsTrain.offsetLeft;

function moveNews() {
    lineStart--;
    if (lineStart < -news[0].offsetWidth) {
        lineStart += news[0].offsetWidth;

        newsTrain.appendChild(news[0]);
        // why is the news[0] autimatically updated?
    }

    newsTrain.style.left = lineStart + "px";
    requestAnimationFrame(moveNews);
}
moveNews();
// why does it not run itself when i open the web page?
// it runs only when I put the code in the console manually

var requestID = requestAnimationFrame(moveNews);

function stopper() {
    for (var i = 0; i < news.length; i++) {
        news[i].addEventListener("mouseenter", function (event) {
            event.cancelAnimationFrame(requestID);
        });
        news[i].addEventListener("mouseleave", function (e) {
            // how to reactivate the animation?
        });
    }
}
stopper();
