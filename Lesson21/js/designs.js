const sizePicker = $("#sizePicker");
// Get element with id="colorPicker"
const colorPicker = document.getElementById("colorPicker");
// Get element with id="pixel_canvas"
const table = document.getElementById("pixel_canvas");

// Created varialble 
let rows, columns;
// Get element with class="closebtn"
let close = document.getElementsByClassName("closebtn");

/**
 * @descrption When the DOM is fully loaded element with class="canvas" will be hidden.
 */
$(function () {
    $(".canvas").hide();
});

/**
 * @description Create designed canvas columns x rows.
 */
function makeGrid() {
    $(".canvas").show();
    // set values
    rows = $("#input_height").val();
    columns = $("#input_width").val();

    // check if grid size is valid (max. 250 x 250)
    if (rows > 250 || columns > 250) {
        // removes the h6 after element with id="pixel_canvas"
        $("h6").remove().after("#pixel_canvas");
        // inserts the div with class="grid" before element with id="pixel_canvas"
        $("<div class=\"grid spooky\"><p><i>Spooky!!</i><br>Table's max size can be 250 x 250</p></div>").insertBefore("#pixel_canvas");
        // inserts the h6 after element with id="pixel_canvas"
        $("<h6>*Press submit button in order to clear and re-create a new project!</h6>").insertAfter("#pixel_canvas");
    } else {
        // table creation
        for (let i = 0; i < rows; i++) {
            const row = table.insertRow(i);
            row.setAttribute('class', 'grid');
            for (let j = 0; j < columns; j++) {
                const cell = row.insertCell(j);
                // on cell's click set backgroundColor
                cell.onclick = () => {
                    cell.style.backgroundColor = colorPicker.value;
                };
            }
        }
        // removes the h3 before element with id="pixel_canvas"
        $("h3").remove().before("#pixel_canvas");
        // removes the h6 after element with id="pixel_canvas"
        $("h6").remove().after("#pixel_canvas");
        // inserts the h3 before element with id="pixel_canvas"
        $("<h3>Created Canvas is " + columns + " x " + rows + "</h3>").insertBefore("#pixel_canvas");
        // inserts the h6 after element with id="pixel_canvas"
        $("<h6>*Press submit button in order to clear and re-create a new project!</h6>").insertAfter("#pixel_canvas");
    }

}

/*
 * @description Fuctionallity when submit button pressed.
 */
sizePicker.submit(function (event) {
    event.preventDefault();
    // removes class="grid"
    $(".grid").remove();
    // removes the h3 before element with id="pixel_canvas"
    $("h3").remove().before("#pixel_canvas");
    makeGrid();
});

/*
 * @description On double click the color of tds changes back to the default one (transparent)
 */
$(document).dblclick(function (event) {
    $(event.target).closest("td").css("background-color", "transparent");
});


// for-loop to get all elements with class="closebtn"
for (let i = 0; i < close.length; i++) {
    // When someone clicks on a close button
    close[i].onclick = function () {
        // Get the parent of <span class="closebtn"> (<div class="alert">)
        let div = this.parentElement;
        // Hide the matched elements by fading them to transparent. - api.jquery.com/fadeout/
        $(div).fadeOut(1000);
    }
}
