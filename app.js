(function(angular, _) {
  "use strict";

  var module = angular.module("mainApp", ["my.components"]);
  module.controller('mainCtrl', function($scope) {
    $scope.foo = "AngularJS";
  });


})(angular, _);
