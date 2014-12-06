var _ = require("lodash");
// start is an array of roadworks' starts
// end is an array of roadworks' ends
// return the length of total overlaps (overlap means there are more than one roadwork segments)

var fraudFeet = function(start, end) {
  var points = _.flatten([
    _.map(start, function(it) {
      return {
        isStart: true,
        at: it
      };
    }),
    _.map(end, function(it) {
      return {
        isStart: false,
        at: it
      };
    })
  ]);
  points = _.sortBy(points, function(pt) {
    return pt.at;
  });
  var segCount = 0;
  var overlapBegin;
  var totalOverlap = 0;
  _.each(points, function(pt) {
    if (pt.isStart) {
      segCount++;
      if (segCount === 2) {
        overlapBegin = pt.at;
      }
    } else {
      segCount--;
      if (segCount === 1) {
        totalOverlap += pt.at - overlapBegin;
      }
    }
  });
  return totalOverlap;
};

console.assert(fraudFeet([50, 50, 50], [58, 58, 58]) === 8);
console.assert(fraudFeet([171234, 12, 20, 30], [171236, 20, 30, 40]) === 0);
console.assert(fraudFeet([12, 32, 92], [991, 161, 1093]) === 959);
