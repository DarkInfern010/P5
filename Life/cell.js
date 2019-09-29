function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;

	this.active = false;
	this.color = 255;
}

Cell.prototype.show = function() {
	fill(this.color);
	rect(this.x, this.y, this.w, this.w);
}

Cell.prototype.changeColor = function() {
	if (this.active) {
		this.color = 0;
	} else {
		this.color = 255;
	}
}

Cell.prototype.countCell = function() {
	
}