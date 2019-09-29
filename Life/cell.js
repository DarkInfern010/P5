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

Cell.prototype.countCell = function(x,y) {
	var total = 0;
	if (x == 0) {
		for (i = x; i <= x + 1; i++) {
			if (y == 0) {
				for (j = y; j <= y + 1; j++) {
	
					if (i != x || j != y) {
						if (grid[i][j].active) {
							total++;
						}
					}

				}
			} else if (y == width) {
				for (j = y - 1; j <= y; j++) {
					
					if (i != x || j != y) {
						if (grid[i][j].active) {
							total++;
						}
					}

				}
			}
		}
	} else if (x == height) {
		for (i = x - 1; i = x; i++) {
			if (y == 0) {
				for (j = y; j <= y + 1; j++) {
					
					if (i != x || j != y) {
						if (grid[i][j].active) {
							total++;
						}
					}

				}
			} else if (y == width) {
				for (j = y - 1; j <= y; j++) {
					
					if (i != x || j != y) {
						if (grid[i][j].active) {
							total++;
						}
					}

				}
			}
		}
	} else if (y > 0 && y < width) {
		for (j = y - 1; j <= j + 1; j++) {
			if (x == 0) {
				for (i = x; i <= x + 1; i++) {
					
					if (i != x || j != y) {
						if (grid[i][j].active) {
							total++;
						}
					}

				}
			} else if (x == height) {
				for (i = x - 1; i <= x; i++) {
					
					if (i != x || j != y) {
						if (grid[i][j].active) {
							total++;
						}
					}

				}
			}
		}
	} else if (x > 0 && x < height) {
		for (i = x - 1; i <= x + 1; i++) {
			if (y == 0) {
				for (j = y; j <= y + 1; j++) {
					
					if (i != x || j != y) {
						if (grid[i][j].active) {
							total++;
						}
					}

				}
			} else if (y == width) {
				for (j = y - 1; j <= y; j++) {
					
					if (i != x || j != y) {
						if (grid[i][j].active) {
							total++;
						}
					}

				}
			}
		}
	} else {
		for (i = x - 1; i <= x + 1; i++) {
			for (j = y - 1; j <= y + 1; j++) {
				
				if (i != x || j != y) {
					if (grid[i][j].active) {
						total++;
					}
				}

			}
		}
	}
	return total;
}