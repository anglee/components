var _ = require("lodash");
var Q = require("q");

var n2v = function(number) {
  var rec = [];
  var prev = null;
  var count = 0;

  _.each(number.split(''), function(num) {
    if (num === prev) {
      count++;
    } else {
      if (count > 0) {
        rec.push(count);
        rec.push(prev);
      }
      prev = num;
      count = 1;
    }
  });

  if (count > 0) {
    rec.push(count);
    rec.push(prev);
  }

  return rec.join("");
};

console.assert(n2v("11122") === "3122");
console.assert(n2v("1") === "11");
console.assert(n2v("11") === "21");
console.assert(n2v("21") === "1211");
console.assert(n2v("1211") === "111221");
