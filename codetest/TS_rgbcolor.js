// rgbIn is a 3 element array, that are r, g, b values of a color
// if the input color is not gray, return [r', g', b'], where r' = (255 - r) and so on
// if the input color is gray, return if abs(x - x') > 32, return x' else (x < 128) ? x + 128 : x - 128
// the definition of gray is that the diff between all pair of abs(r, r'), abs(g, g'), abs(b, b') is < 32
var _ = require("lodash");
var getComplement = function(rgbIn) {
  var rgbSub = _.map(rgbIn, function(x) {
    return 255 - x;
  });

  var diffs = _.range(3).map(function(i) {
    return Math.abs(rgbSub[i] - rgbIn[i]);
  });

  var isGray = _.filter(diffs, function(d) {
    return d < 32;
  }).length === 3;

  if (!isGray) {
    return rgbSub;
  } else {
    return _.map(rgbIn, function(x) {
      return (x < 128)? x + 128 : x - 128;
    });
  }
};

console.assert(_.isEqual(getComplement([255, 0, 0]), [0, 255, 255]));
console.assert(_.isEqual(getComplement([115, 115, 143]), [243, 243, 15]));
console.assert(_.isEqual(getComplement([115, 115, 144]), [140, 140, 111]));
console.assert(_.isEqual(getComplement([153, 12, 55]), [102, 243, 200]));
