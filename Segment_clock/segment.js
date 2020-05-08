function Segment(x, y, w , h, r) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;

    this.active = false;
    this.color = 100;
}

Segment.prototype.show = function() {
    this.color = this.active ? 255 : 100;
    fill(this.color);
    rect(this.x, this.y, this.w, this.h, this.r);
}