//https://projecteuler.net/problem=14
var _ = require("lodash");
var getLength = function(n) {
  var count = 0;
  while (n !== 1) {
    if (n % 2) {
      n = 3 * n + 1;
    } else {
      n = n / 2;
    }
    count++;
  }
  return count;
};

// alternatively, recursive
var col2 = function(n) {
  if (n === 1) {
    return 0;
  }
  if (n % 2) {
    return col(3 * n + 1) + 1;
  } else {
    return col(n / 2) + 1;
  }
};

// alternatively, recursive with a cache
var mem = [null, 0];
var col = function(n) {
  if (mem[n] != null) {
    return mem[n];
  }
  var ret;
  if (n === 1) {
    ret = 0;
  }
  if (n % 2) {
    ret = col(3 * n + 1) + 1;
  } else {
    ret = col(n / 2) + 1;
  }
  mem[n] = ret;
  return ret;
};

///console.log(getLength(27));

var maxLength = 0;
var maxI;
_.range(1, 1000 * 1000).forEach(function(it) {
  var length = col(it);
  if (length > maxLength) {
    maxLength = length;
    maxI = it;
  }
});

console.log(maxLength);
console.log(maxI);