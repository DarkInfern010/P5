function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

function checkLife() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (!grid[i][j].active) {
                if (countCell(grid[i][j]) == 3) {
                    grid[i][j].active = true;
                }
            } else {
                if (countCell(grid[i][j]) < 2 || countCell(grid[i][j]) > 3) {
                    grid[i][j].active = false;
                }
            }
        }
    }
}
  
function countCell(cellule) {

    var count = 0;

	for (var xoff = -1; xoff <= 1; xoff++){
		for (var yoff = -1; yoff <= 1; yoff++){
			var i = cellule.i + xoff;
			var j = cellule.j + yoff;
			if (i > -1 && i < cols && j > -1 && j < rows) {
				if(grid[i][j].active) {
					count++;
				}
			}
		}
	}
    return count;
}

var grid;
var cols;
var rows;
var w = 10;
  
function setup() {
    createCanvas(701, 701);
    cols = floor(701 / w);
    rows = floor(701 / w);
    grid = make2DArray(cols, rows);

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
        grid[i][j] = new Cell(i, j, w);
        }
    }

    grid[10][10].active = true;
    grid[10][11].active = true;
    grid[10][12].active = true;
    grid[12][10].active = true;
    grid[12][11].active = true;
    grid[12][12].active = true;
}

function draw() {
    background(255);

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
        grid[i][j].show();
        }
    }

    checkLife();

}
  