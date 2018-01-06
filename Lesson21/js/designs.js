// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const sizePicker = $('#sizePicker');

var i, j;
var rows, columns;
var markup = '';

function makeGrid() {

// Your code goes here 
    
    rows = $('#input_height').val();
    columns = $('#input_width').val();
    
    for (i = 0; i < rows; i++){
        markup = "<tr>";
        for (j = 0; j < columns; j++){
            markup = markup + "<td></td>";
        }
        $('#pixel_canvas').append(markup + "</tr>");
    }
}

sizePicker.submit(function(event){
    event.preventDefault();
    makeGrid();
});
