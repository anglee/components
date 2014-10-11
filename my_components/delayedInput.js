(function(angular) {
  "use strict";

  var module = angular.module("my.components", []);
  module.directive("delayedInput", function() {
    return {
      restrict: 'E',
      template: "<div>Delayed Input</div>",
      link: function(scope, element, attrs) {

      }
    };
  });

})(angular);