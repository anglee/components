var _ = require("lodash");
var isNumber = function(it) {
  var result = parseInt(it);
  return !_.isNaN(result);
};
var jumbleSort = function(input) {
  var tokens = input.split(" ");
  var numbers = [];
  var words = [];
  var isNumbers = _.map(tokens, function(token) {
    var isNum = isNumber(token);
    if (isNum) {
      numbers.push(parseInt(token));
    } else {
      words.push(token);
    }
    return isNum;
  });

  numbers = numbers.sort();
  words = words.sort();

  var output = _.map(isNumbers, function(it) {
    if (it) {
      return numbers.shift();
    } else {
      return words.shift();
    }
  }).join(" ");
  return output;
};

console.assert(jumbleSort("1") === "1");
console.assert(jumbleSort("car truck bus") === "bus car truck");
console.assert(jumbleSort("8 4 6 1 -2 9 5") === "-2 1 4 5 6 8 9");
console.assert(jumbleSort("car truck 8 4 bus 6 1") === "bus car 1 4 truck 6 8");


