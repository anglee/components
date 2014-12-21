(function(angular, _) {
  "use strict";

  var module = angular.module("mainApp", ['gv']);
  module.controller('mainCtrl', function($scope) {
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
    }
  });

})(angular, _);

