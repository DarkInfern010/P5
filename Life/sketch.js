function make2DArray(cols, rows) {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

function checkLife() {
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			if (!grid[i][j].active) {
				//Cellule morte si possède 3 voisines vivante => Vie
				if (grid[i][j].countCell(i,j) == 3) {
					grid[i][j].active = true;
				} else {
					grid[i][j].active = false;
				}
			} else {
				//Doit posséder 2 ou 3 voisines en vie => Vie Sinon Mort
				if (grid[i][j].countCell(i,j) == 2 || grid[i][j].countCell(i,j) == 3) {
					grid[i][j].active = true;
				} else {
					grid[i][j].active = false;
				}
			}
		}
	}
}

function game() {
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j].changeColor();
		}
	}
}

var grid;
var cols;
var rows;
var w = 20;

function setup() {
	createCanvas(701,701);
	cols = floor(width / w);
	rows = floor(height / w);
	grid = make2DArray(cols, rows);

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j] = new Cell(i, j, w);
		}
	}

	grid[10][10].active = true;
	grid[10][11].active = true;
	grid[10][12].active = true;
}

function draw() {
	background(255);

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}

	game();
	checkLife();
	
}