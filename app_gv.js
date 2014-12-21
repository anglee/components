(function(angular, _) {
  "use strict";

  var module = angular.module("mainApp", ['gv']);
  module.controller('mainCtrl', function($scope) {
    $scope.foo = "AngularJS";
    $scope.node = {
      value: null
    }
  });

})(angular, _);