function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;

	this.color = 255;
}

Cell.prototype.show = function() {
  fill(this.color);
	rect(this.x, this.y, this.w, this.w);
}

Cell.prototype.contains = function (x, y) {
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y+this.w);
}

Cell.prototype.changeColor = function(colorPen) {
  //this.color == 0 ? this.color = 255 : this.color = 0;
	this.color = colorPen;
}
