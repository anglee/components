(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('filterUnion', function() {
    return {
      restrict: 'E',
      templateUrl: "filter_union.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.theOtherGraph = {
          value: null
        };
        scope.$watch("theOtherGraph.value", function(graph) {
          if (graph) {
            scope.valueObj.value = [
              "union",
              graph.name
            ];
          } else {
            scope.valueObj.value = [];
          }
        });
      }
    };
  });

})();
