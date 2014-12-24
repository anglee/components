(function(angular, _) {
  "use strict";

  var module = angular.module("mainApp", ['gv']);
  module.controller('mainCtrl', function($scope, utils, filterOps) {
    $scope.foo = "AngularJS";
    $scope.node = {
      value: null
    };
    $scope.filterType = {
      value: "verts"
    };
    $scope.direction = {
      value: "IN"
    };
    $scope.addGraph = function(graph) {
      console.log("add graph = ", graph);
    };
    $scope.addFilter = function(filter) {
      console.log("add filter = ", filter);
    };

    $scope.filterUnion = [];

    var nodes = [
      {
        value: "aaa"
      },
      {
        value: "bbb"
      },
      {
        value: "ccc"
      }
    ];

    $scope.nodes = {
      value: nodes
    };

    $scope.filters = [
      ["graph", "graphName"],
      ["bfs", "INOUT", "nodeA", "nodeB"],
      ["bfs", "INOUT", "nodeC", "nodeD"]
    ];

  });

})(angular, _);

