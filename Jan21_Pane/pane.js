
// // sorry this is not finished yet T_T

slider = $(".slider");
top = $(".top");
bottom = $(".bottom");
console.log(slider);

var e = jQuery.Event("click");

// slider.mousedown(function () {
//     var pointerX = $(this).offset();
//     console.log(offset.left);
//     slider.css("left", offset.left - 5);
//     top.css("width", offset.left);
// });

slider.on("mousemove", function (event) {
    if ((isDragging = true)) {
        slider.css("left", event.pageX - 10);
        top.css("width", event.pageX);
    }
});

// function allowDrop(ev) {
//     ev.preventDefault();
// }

//trying things out...

// $(function () {
//     "slider".draggable();
// });

// slider
//     .mousemove(function () {
//         isDragging = true;
//         slider.css("left", offset.left - 5);
//         top.css("width", offset.left);
//     })
//     .mouseup(function () {
//         var wasDragging = isDragging;
//         isDragging = false;
//         if (!wasDragging) {
//         }
//     });





// document.addEventListener("drag", function (event) {}, false);

// document.addEventListener(
//     "dragstart",
//     function (event) {
//         // store a ref. on the dragged elem
//         dragged = event.target;
//         // make it half transparent
//         event.target.style.opacity = 0.5;
//     },
//     false
// );

// document.addEventListener(
//     "dragend",
//     function (event) {
//         // reset the transparency
//         event.target.style.opacity = "";
//     },
//     false
// );

// /* events fired on the drop targets */
// document.addEventListener(
//     "dragover",
//     function (event) {
//         // prevent default to allow drop
//         event.preventDefault();
//     },
//     false
// );

// document.addEventListener(
//     "dragenter",
//     function (event) {
//         // highlight potential drop target when the draggable element enters it
//         if (event.target.className == "dropzone") {
//             event.target.style.background = "purple";
//         }
//     },
//     false
// );

// document.addEventListener(
//     "dragleave",
//     function (event) {
//         // reset background of potential drop target when the draggable element leaves it
//         if (event.target.className == "dropzone") {
//             event.target.style.background = "";
//         }
//     },
//     false
// );

// document.addEventListener(
//     "drop",
//     function (event) {
//         // prevent default action (open as link for some elements)
//         event.preventDefault();
//         // move dragged elem to the selected drop target
//         if (event.target.className == "dropzone") {
//             event.target.style.background = "";
//             dragged.parentNode.removeChild(dragged);
//             event.target.appendChild(dragged);
//         }
//     },
//     false
);