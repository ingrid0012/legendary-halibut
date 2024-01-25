//Crea la variable "mouseEvent" y establécela como “empty”.
var mouseEvent="empty"; 
//Crea dos variables: "last_position_of_x" y "last_position_of_y".
var last_position_of_x, last_position_of_y;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
//Define dos variables: 'color' y 'width_of_line' y asígnales los valores.
color="black";
width_of_line=1; 
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
        color=document.getElementById("color").value;
        width_of_line.getElementById("width_of_line").value;
        mouseEvent = "mousedown";
}
//Crea la función de detección de evento addEventListener()para mouseup(). 
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}
// Mouse Leave 
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
        mouseEvent = "mouseleave";
}   

canvas.addEventListener("mousemove", my_mousemove);
//Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mousedown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
        }

        
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

       
        

        
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
       
        
       
        
        
        
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}