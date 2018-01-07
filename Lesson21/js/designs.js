// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const sizePicker = $("#sizePicker");

var i, j;
var rowscolumns;
var grid = "";

$(function(){
    $(".canvas h2").hide();
});

function makeGrid() {

// Your code goes here 
    $(".canvas h2").show();
    rows = $("#input_height").val();
    columns = $("#input_width").val();
    
    for (i = 0; i < rows; i++){
        grid = "<tr class=\"grid\">";
        for (j = 0; j < columns; j++){
            grid = grid + "<td></td>";
        }
        $("#pixel_canvas").append(grid + "</tr>");
    }
    
}

sizePicker.submit(function(event){
    event.preventDefault();
    $(".grid").remove();
    $(".canvas h2").hide();
    $("h3").remove().before("#pixel_canvas");
    makeGrid();
    $("<h3>Created Canvas is " + columns + " x " + rows + "</h3>").insertBefore("#pixel_canvas");
});
