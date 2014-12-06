var _ = require("lodash");

var sortByCategory = function(input, output) {
  var buckets = [[], [], []];
  _.each(input, function(it) {
    buckets[classify(it)].push(it);
  });
  return _.flatten(buckets);
};


// ================== SORT IN PLACE
var sort2Categories = function(input, l, r, catL, catR) {
  while (l < r) {
    while (l < input.length && classify(input[l]) !== catR) { l++; }
    while (r >= 0 && classify(input[r]) !== catL) { r--; }
    if (l < input.length && r >= 0 && l < r) {
      var temp = input[l];
      input[l] = input[r];
      input[r] = temp;
    }
  }
};

var sortByCategoryInPlace = function(input) {
  sort2Categories(input, 0, input.length - 1, 0, 2);
  var firstIndexOf2 = _.findIndex(input, function(it) {
    return classify(it) === 2;
  });
  sort2Categories(input, 0, firstIndexOf2 - 1, 0, 1);
  sort2Categories(input, firstIndexOf2, input.length - 1, 1, 2);
  return input;
};

// ===================== SORT IN PLACE v2
var sortByCategoryInPlace2 = function(input) {
  var l = 0;
  var r = input.length - 1;

  while (l < r) {
    while (l < input.length && classify(input[l]) === 0) { l++; }
    while (r >= 0 && classify(input[r]) !== 0) { r--; }
    if (l < input.length && r >= 0 && l < r) {
      var temp = input[l];
      input[l] = input[r];
      input[r] = temp;
    }
  }

  var r = input.length - 1;
  while (l < r) {
    while (l < input.length && classify(input[l]) === 1) { l++; }
    while (r >= 0 && classify(input[r]) !== 1) { r--; }
    if (l < input.length && r >= 0 && l < r) {
      var temp = input[l];
      input[l] = input[r];
      input[r] = temp;
    }
  }
  return input;
};

// TEST
var classify = function(it) {
  return it - 1;
};

var input = [3, 1, 2, 3, 1, 2, 3];
//console.log(sortByCategory(input));
console.log(input);
//sortByCategoryInPlace(input)
sortByCategoryInPlace2(input)
console.log(input);
