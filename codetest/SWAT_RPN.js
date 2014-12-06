var _ = require("lodash");
var ops = {
  "+": function(a, b) {
    return a + b;
  },
  "-": function(a, b) {
    return a - b;
  },
  "*": function(a, b) {
    return a * b;
  },
  "/": function(a, b) {
    return a / b;
  }
};
var rpn = function(text) {
  var tt = text.split("");
  var stack = [];
  tt.forEach(function(t) {
    var num = parseInt(t);
    if (!_.isNaN(num)) {
      stack.push(num);
    } else {
      var op = ops[t];
      var b = stack.pop();
      var a = stack.pop();
      stack.push(op(a, b));
    }
  });
  return stack[0];
};

console.assert(rpn("34-") === -1);
console.assert(rpn("43+6*") === 42);
console.assert(rpn("643+*") === 42);
console.log(rpn("643+*1+") === 43);
