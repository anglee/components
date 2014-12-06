var getColor = function(x, y) {
  if (x < 0 || y < 0 || x >= width || y >= height) {
    return null;
  }
  return C[x][y];
};

var color = function(x, y, from, to) {
  if (getColor(x, y) !== from) {
    return;
  }

  setColor(x, y, to);

  color(x - 1, y, from, to);
  color(x + 1, y, from, to);
  color(x, y - 1, from, to);
  color(x, y + 1, from, to);
};