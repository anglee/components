var _ = require("lodash");

var visit = function(node) {
  console.log("NODE " + node.data);
};

// DFS by recursion
var dfs = function(root) {
  visit(root);
  _.each(root.children, function(child) {
    dfs(child);
  })
};

var dfs2 = function(root) {
  var stack = [root];
  var node = null;
  while(!_.isEmpty(stack)) {
    node = stack.pop();
    visit(node);
    _.each(node.children.reverse(), function(child) {
      stack.push(child);
    });
  }
};

var bfs = function(root) {
  var queue = [root];
  var node = null;
  while (!_.isEmpty(queue)) {
    node = queue.shift();
    visit(node);
    _.each(node.children, function(child) {
      queue.push(child);
    });
  }
};

var testData = {
  root: {
    data: "1",
    children: [
      {
        data: "1_1",
        children: [
          {
            data: "1_1_1",
            children: []
          },
          {
            data: "1_1_2",
            children: []
          }
        ]
      },
      {
        data: "1_2",
        children: [
          {
            data: "1_2_1",
            children: []
          },
          {
            data: "1_2_2",
            children: []
          }
        ]
      }
    ]
  }
};

console.log("dfs")
dfs(testData.root);

console.log("dfs2")
dfs2(testData.root);

console.log("bfs")
bfs(testData.root);
