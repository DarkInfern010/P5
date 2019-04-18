function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var grid;
var cols;
var rows;
var w = 20;

var paletteColor;
var paletteCols;
var paletteRows;
var compteur = 0;
var pen;

function setup() {
  createCanvas(601, 501);
  cols = floor(501 / w);
  rows = floor(501 / w);
  grid = make2DArray(cols, rows);

  paletteCols = 4;
  paletteRows = 2;
  paletteColor = make2DArray(paletteCols, paletteRows);

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }

  for (var i = 0; i < paletteCols; i++) {
    for (var j = 0; j < paletteRows; j++) {
      paletteColor[i][j] = new Color(i, j, w);
    }
  }

}

function mousePressed() {

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].changeColor(pen);
      }
    }
  }

  for (var i = 0; i < paletteCols; i++) {
    for (var j = 0; j < paletteRows; j++) {
      if (paletteColor[i][j].contains(mouseX, mouseY)) {
        pen = paletteColor[i][j].penColor();
      }
    }
  }

}

function draw() {
  background(255);

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }

  paletteColor[0][0].show(0);
  paletteColor[1][0].show(1);
  paletteColor[2][0].show(2);
  paletteColor[3][0].show(3);
  paletteColor[0][1].show(4);
  paletteColor[1][1].show(5);
  paletteColor[2][1].show(6);
  paletteColor[3][1].show(7);

}
