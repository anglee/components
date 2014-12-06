var getCharAt = function(x, y) {

};

var findIn2D = function(target, startX, startY) {
  if (_.isEmpty(target)) { return true; }

  if (getCharAt(startX, startY) !== target[0]) {
    return false;
  }

  var newTarget = target.substring(0);
  return findIn2D(newTarget, startX - 1, startY)
      || findIn2D(newTarget, startX + 1, startY)
      || findIn2D(newTarget, startX, startY - 1)
      || findIn2D(newTarget, startX, startY + 1);
};
