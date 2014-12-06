var _ = require("lodash");

var getIntersection = function(a, b) {
  var intersection = [];
  _.each(a, function(ia) {
    _.each(b, function(ib) {
      if (ia === ib) {
        intersection.push(ia);
      }
    });
  });
  return intersection;
};

var getIntersection2 = function(a, b) {
  var aa = {};
  _.each(a, function(ia) {
    aa[ia] = true;
  });
  return _.filter(b, function(ib) {
    return aa[ib];
  });
};

var getIntersection3 = function(a, b) {
  var a = _.sortBy(a);
  var b = _.sortBy(b);
  var px = 0;
  var py = 0;
  var intersection = [];
  var x = a;
  var y = b;
  while (x[px] != null && y[py] != null) {

    while (x[px] != null && x[px] <= y[py]) {
      if (x[px] === y[py]) {
        intersection.push(x[px]);
      }
      px++;
    }
    //swap x and y
    var temp = x;
    x = y;
    y = temp;
    temp = px;
    px = py;
    py = temp;
  }
  return intersection;
};


console.log(getIntersection([1,2,3], [4,3,2]));
console.log(getIntersection2([1,2,3], [4,3,2]));
console.log(getIntersection3([1,2,3], [4,3,2]));