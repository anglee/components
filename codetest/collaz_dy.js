var _ = require("lodash");
var getMax = function() {
  var max = 0;
  var maxI = 1;
  var C = [null, 0];
  _.range(2, 1000 * 1000).forEach(function(it) {
    if (it % 2 == 0) {
      C[it] = C[it / 2];
    } else {
      //C[it] = C[it * 3 + 1]
    }
    if (C[it] > max) {
      max = C[it];
      maxI = it;
    }
  });

  return [max, maxI];
};


var getMax2 = function() {
  _.range(2, 1000 * 1000).forEach(function(it) {
    if (it % 2 == 0) {
      C[it] = C[it / 2];
    } else {
      //C[it] = C[it * 3 + 1]
    }
  });
};