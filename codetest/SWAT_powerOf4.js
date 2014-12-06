var _ = require("lodash");

var isPowerOf4 = function(number) {
  while (number % 4 === 0) {
    number /= 4;
  };
  return number === 1;
};

var isPowerOf4_2 = function(number) {
  return (number & 0x55555) !== 0 && (number & number - 1) === 0;
};

console.log(_.filter(_.range(1, 1001), isPowerOf4));
console.log(_.filter(_.range(1, 1001), isPowerOf4_2));

