// for each index
//   determine the LIS that end and include the number at that index, i,  by
//   go through each prev index i' and if current A[i] > A[i'], if so LIS[i] = longer(LIS[i], LIS[i'] + A[i]);

var _ = require("lodash");
var A = [1,5,2,0,4];
var longer = function(a, b) {
  return a.length > b.length ? a : b;
};
var LIS = function(input) {
  var LISs = [];
  var theLIS = null;
  input.forEach(function(a, i) {
    LISs[i] = [input[i]];
    _.range(0, i).forEach(function(ii) {
      if (input[ii] < input[i]) {
        LISs[i] = longer(LISs[i], LISs[ii].concat(input[i]))
      }
    });
    if (theLIS === null || LISs[i].length > theLIS.length) {
      theLIS = LISs[i];
    }
  });
  return theLIS;
};

console.log(LIS([1,5,2,0,4]));
