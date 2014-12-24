(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("directionSelect", function() {
    var DIRECTIONS = ["IN", "OUT", "INOUT"];
    return {
      restrict: "E",
      templateUrl: "my_components/gv/directionSelect.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.directions = DIRECTIONS;
        if (!scope.valueObj.value) {
          scope.valueObj.value = "IN";
        }
      }
    };
  });

})();
