// green = #2ecc71
// blue = #3498db
// purple = #9b59b6
// yellow = #f1c40f
// pink = #ff9ff3
// red = #e74c3c
// gray = #7f8c8d
// black = #000000

var tabColor = ["#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#ff9ff3", "#e74c3c", "#7f8c8d", "#000000"];

function Color(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;

	this.color;
}

Color.prototype.show = function(index) {
	this.color = tabColor[index];
	fill(tabColor[index]);
	rect(this.x + 500 + w, this.y, this.w, this.w);
}

Color.prototype.contains = function (x, y) {
	return (x > this.x + 500 + w && x < this.x + 500 + w + this.w && y > this.y && y < this.y+this.w);
}

Color.prototype.penColor = function () {
	return this.color;
}
