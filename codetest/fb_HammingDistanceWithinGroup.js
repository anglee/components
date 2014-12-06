var _ = require("lodash");

var getDigitAt = function(number, at) {
  return number[number.length - 1 - at] === "1" ? 1 : 0;
};

var getDistanceSum = function(group) {
  // for each digit, calculate the number 1's and 0's

  var countAt = function(at) {
    return _.countBy(group, function(number) {
      return getDigitAt(number, at);
    });
  };

  var maxLength = _.max(group, function(it) {
    return it.length;
  }).length;

  var sum = 0;
  _.range(maxLength).forEach(function(i) {
    var c = countAt(i);
    var count_0 = c[0] ? c[0] : 0;
    var count_1 = c[1] ? c[1] : 0;
    sum += count_0 * count_1;
  });


  return sum;
};

console.log(getDistanceSum(["011", "101", "101"]));