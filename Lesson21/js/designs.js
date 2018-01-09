// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const sizePicker = $("#sizePicker");
const colorPicker = $("#colorPicker");

let rows, columns, color;
let grid = "";

$(function () {
    $(".canvas").hide();
});

function makeGrid() {

    // Your code goes here 
    $(".canvas").show();
    rows = $("#input_height").val();
    columns = $("#input_width").val();

    for (let i = 0; i < rows; i++) {
        grid = "<tr class=\"grid\">";
        for (let j = 0; j < columns; j++) {
            grid = grid + "<td></td>";
        }
        $("#pixel_canvas").append(grid + "</tr>");
    }

}

sizePicker.submit(function (event) {
    event.preventDefault();
    $(".grid").remove();
    $("h3").remove().before("#pixel_canvas");
    $("h6").remove().after("#pixel_canvas");
    makeGrid();
    $("<h3>Created Canvas is " + columns + " x " + rows + "</h3>").insertBefore("#pixel_canvas");
    $("<h6>*Press submit button in order to clear and re-create a new project!</h6>").insertAfter("#pixel_canvas");
    color = document.getElementById("colorPicker").value;
});

colorPicker.change(function (event) {
    color = document.getElementById("colorPicker").value;
});

$(document).click(function (event) {
    $(event.target).closest("td").css("background-color", color);
});
