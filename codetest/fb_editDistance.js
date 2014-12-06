var getEditDistance = function(a, b) {
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }
  if (a[0] === b[0]) {
    return getEditDistance(a.substring(0), b.substring(0));
  } else {
    return Math.min(
        getEditDistance(a.substring(0), b),
        getEditDistance(a, b.substring(0)),
        getEditDistance(a.substring(0), b.substring(0))
    ) + 1;
  }
};

