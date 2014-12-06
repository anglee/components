// assume buildings are given with {x: (left), w: (width), h: (height) }

var _ = require("lodash");
var generateSihouette = function(buildings) {
  var borders = [];
  buildings.forEach(function(b) {
    borders.push({
      isLeft: true,
      x: b.x,
      h: b.h
    });
    borders.push({
      isLeft: false,
      x: b.x + b.w,
      h: b.h
    })
  });

  borders = _.sortBy(borders, 'x');

  var output = [];
  var tops = [];
  var currentTop = 0;

  borders.forEach(function(b) {
    if (b.isLeft) {
      tops.push(b.h);
      if (currentTop < b.h) {
        output.push({x: b.x, y: currentTop});
        currentTop = b.h;
        output.push({x: b.x, y: currentTop});
      }
    } else { // is right
      tops.splice(tops.indexOf(b.h), 1); //remove(b.h) from tops;
      if (currentTop === b.h) {
        var secondTop = _.isEmpty(tops) ? 0 : _.max(tops); // this will be the new top after the current top is removed
        if (currentTop !== secondTop) {
          output.push({x: b.x, y: currentTop});
          output.push({x: b.x, y: secondTop});
        }
        currentTop = secondTop;
      }
    }
  });

  return output;
};

var city0 = [
  { x: 0, w: 10, h: 1 },
  { x: 1, w: 8, h: 2 }
];
var city1 = [
  { x: 0, w: 10, h: 1 },
  { x: 1, w: 8, h: 1 }
];
var city2 = [
  { x: 0, w: 10, h: 2 },
  { x: 1, w: 8, h: 1 }
];
var city3 = [
  { x: 0, w: 10, h: 2 },
  { x: 1, w: 10, h: 1 }
];

console.log(generateSihouette(city0));
console.log(generateSihouette(city1));
console.log(generateSihouette(city2));
console.log(generateSihouette(city3));
