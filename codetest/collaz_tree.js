var getChildren = function(n) {
  var children = [2 * n];
  if (n-1 % 3 == 0) {
    children.push(n-1 / 3);
  }
};

var buildTree = function() {
  var root = {
    children: []
  };


};