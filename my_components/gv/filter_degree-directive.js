(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('filterDegree', function() {
    return {
      restrict: 'E',
      templateUrl: "my_components/gv/filter_degree.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.direction = {
          value: "IN"
        };
        scope.comparator = {
          value: "GT"
        };
        scope.value = "1.0";
        var update = function() {
          scope.valueObj.value = [
            "degree",
            scope.direction.value,
            scope.comparator.value,
            scope.value
          ];
        };

        scope.$watchGroup([
            "direction.value",
            "comparator.value",
            "value"
          ], function() {
          update();
        });

        update();
      }
    };
  });

})();
