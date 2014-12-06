var _ = require('lodash');
var insertionSort = function(A) {
  var ret = null;
  while(!_.isEmpty(A)) {
    var it = A.pop();
    // insert it into ret;
    if (ret == null) {
      ret = [it];
    } else {
      //var idx = _.findIndex(ret, function(r) {
      //  return r > it;
      //});
      var idx = _.sortedIndex(ret, it);
      if (idx >= 0) {
        ret.splice(idx, 0, it);
      } else {
        ret.push(it);
      }
    }
  }
  return ret;
};
var bubbleSort = function(A) {

};
var mergeSort = function(A) {
  if (A.length <= 1) {
    return A;
  }
  var mid = Math.floor(A.length / 2);
  var P = mergeSort(A.slice(0, mid));
  var Q = mergeSort(A.slice(mid));

  var ret = [];
  while(!_.isEmpty(P) || !_.isEmpty(Q)) {
    if (_.isEmpty(P) || P[0] > Q[0]) {
      ret.push(Q.shift());
    } else {
      ret.push(P.shift());
    }
  }
  return ret;
};
var quickSort = function(A) {

};

var getDigit = function(number, at) {
  number = Math.floor(number / Math.pow(10, at));
  return number % 10;
};
var radixSort = function(A, digits) {
  _.times(digits, function(d) {
    var map = _.range(10).map(function(it) { return []; });
    _.each(A, function(it) {
      var digit = getDigit(it, d);
      map[digit].push(it);
    });
//    console.log(map);
    A = _.flatten(map);
  });
  return A;
};

var input = _.shuffle(_.range(100));
console.log(input);
//console.log(mergeSort(input));
//console.log(insertionSort(input));
console.log(radixSort(input, 2));