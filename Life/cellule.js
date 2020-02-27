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
    this.color = this.active ? 0 : 255;
    fill(this.color);
    rect(this.x, this.y, this.w, this.w);
}