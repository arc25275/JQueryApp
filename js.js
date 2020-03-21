$(document).ready(function() {
    createGrid();
});


$(document).keyup(function (event) {
    if (event.key == "r") {
        createGrid();
    }
})

var click;

var colorPalette = ["red", "orange", "yellow", "green", "blue", "purple"];
var color = colorPalette[0];


function createGrid() {
    $("#grid").mousedown(function (event) {
        click = true;
    });
    $("#grid").mouseup(function (event) {
        click = false;
    });
    for (var i = 0; i < 50; i++) {
        for (var j = 0; j < 50; j++) {
            var box = $("<box></box>");
            box.attr("class", "unit");
            box.attr("id", i + "," + j);
            box.css("left", i * 16 + "px");
            box.css("top", j * 16 + "px");
            box.on("mouseover", (event) => {
                if (click) {
                    changeColor(event);
                }

            });
            $("#grid").append(box);
        }
    }
    changePalette();
}


function changePalette() {
    $(document).on('dblclick', (event) => {
        if (color == colorPalette[5]) {
            color = colorPalette[0];
        } else {
            for (var i = 5; i >= 0; i--) {
                if (color == colorPalette[i] && i < 5) {
                    color = colorPalette[i + 1];
                }
            }
        }

    });
}

function changeColor(e) {
    let cell = $(e.target);
    cell.css("background", color);
}
