window.onload = function() {
    createGrid();
};

document.addEventListener("keypress", (event) => {
      if (event.key == "r"){
    createGrid();
}
});



var click;

var colorPalette = ["red", "orange", "yellow", "green", "blue", "purple"];
var color = colorPalette[0];


function createGrid() {
    var grid = document.getElementById("grid");
    grid.addEventListener('mousedown', (event) => {
        click = true;
    });
    grid.addEventListener('mouseup', (event) => {
        click = false;
    });
    for(var i = 0; i < 50; i++) {
        for(var j = 0; j < 50; j++) {
            var box = document.createElement("box");
            box.setAttribute("class", "unit");
            box.setAttribute("id", i+","+j);
            box.style.left = i*16+"px";
            box.style.top = j*16+"px";
            box.addEventListener('mouseover', (event) => {
                if(click){
                    changeColor(event);
                }

            });
            grid.appendChild(box);
        }
    }
    changePalette();
}


function changePalette() {
    document.addEventListener('dblclick', (event) => {
        if(color == colorPalette[5]) {
            color = colorPalette[0];
        } else {
            for(var i = 5; i >= 0; i--) {
                if(color == colorPalette[i] && i < 5) {
                    color = colorPalette[i+1];
                }
            }
        }

    });
}

function changeColor(event) {
    let cell = event.target;
    cell.style.background = color;
}
