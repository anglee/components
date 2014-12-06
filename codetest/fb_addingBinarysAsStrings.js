var add = function(b1, b2) {

  var output = "";
  var i1 = b1.length - 1;
  var i2 = b2.length - 1;

  var carryOver = 0;

  while (i1 >= 0 || i2 >= 0) {
    var temp = 0;
    if (b1[i1] === "1") { temp++; }
    if (b2[i2] === "1") { temp++; }
    if (carryOver === 1) { temp++; }
    if (temp >= 2) { carryOver = 1; } else { carryOver = 0; }
    temp %= 2;
    output += temp;
    i1--;
    i2--;
  }
  if (carryOver == 1) {
    output += "1";
  }

  return output.split("").reverse().join("");
};

console.log(add("101", "1101"));
