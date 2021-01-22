slider = $(".slider");
top = $(".top");
bottom = $(".bottom");

slider.mousedown(function () {
    var offset = $(this).offset();
    console.log(offset.left);
    slider.css("left", offset.left - 5);
    top.css("width", offset.left);
});

slider
    .mousemove(function () {
        isDragging = true;
        slider.css("left", offset.left - 5);
        top.css("width", offset.left);
    })
    .mouseup(function () {
        var wasDragging = isDragging;
        isDragging = false;
        if (!wasDragging) {
        }
    });
// sorry this is not finished yet T_T
