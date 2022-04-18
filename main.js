var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = documet.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)

{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth
    }
}