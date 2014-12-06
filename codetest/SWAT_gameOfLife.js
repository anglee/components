var world = []
var getCell = function(i) {
  while (i < 0) {
    i += world.length;
  }

  return world[i % world.length];
};
var shouldBeLiveNext = function(i) {
  var isLive = getCell(i);
  var isRightLive = getCell(i+1);
  var isLeftLive = getCell(i-1);
  if (isLive) {
    return isRightLive() + isLeftLive() <= 1;
  } else {
    return isRightLive() + isLeftLive() >= 1;
  }
};

var iterate = function(w) {
  return _.map(w, function(it, i) {
    shouldBeLiveNext(i);
  });
};