//Take any natural number n.
// If n is even, divide it by 2 to get n / 2.
// If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
// Repeat the process

// This is the Collatz Conjecture
//http://en.wikipedia.org/wiki/Collatz_conjecture

var f = function(n) {
  if (n % 2) { // odd
    return n * 3 + 1;
  } else {
    return n / 2;
  }
};

var foo = function(n) {
  var count = 0;
  while (n !== 1) {
    count++;
    n = f(n);
  }
  return count;
};

//http://stackoverflow.com/questions/5437445/collatz-conjecture-related-interview
// BFS, each node has 1 or 2 childrens (2n and if there is the second children, k, where 3 * k + 1 = n)
var bar = function(n, m, k) {
  var output;
  _.range(1, n).forEach(function(it) {
    var chainLength = getChainLength(it);
    var tooBig = getBiggestInChain(it) > m;
    if (!tooBig && chainLength <= k) {
      output.push(it);
    }
  });
  return output;
};

//https://projecteuler.net/problem=14
//Which starting number, under one million, produces the longest chain?
//NOTE: Once the chain starts the terms are allowed to go above one million.




