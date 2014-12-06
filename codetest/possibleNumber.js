var possibilitiesCount = function(verbal) {
  // need to divide the input string into even number of groups
  // --> insert 1, 3, 5, ... separations
  // 1121 ->
  // 1-121, 11-21, 112-1
  // 1-1-2-1
  //c(n-1, 1) + c(n-1, 2) + c(n-1, 3), ....

  // max of separation for a length n string is n-1
  var out = 0;
  var n = verbal.length;
  _.range(1, n, 2).forEach(function(i) {
    out += c(n-1, i);
  });
  return out;
};

var factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  return a * factorial(a-1);
};

var c = function(a, b) {
  return factorial(a) / factorial(a - b) / factorial(b);
};