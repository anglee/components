(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('filterBfs', function() {
    return {
      restrict: 'E',
      templateUrl: "my_components/gv/filter_bfs.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {

        scope.direction = {
          value: "IN"
        };
        scope.nodes = {
            value: [
              {
                value: "aaa"
              },
              {
                value: "bbb"
              },
              {
                value: "ccc"
              }
            ]
        };

        var update = function() {
          scope.valueObj.value = [
            "bfs",
            scope.direction.value
          ].concat(scope.getNodes());
        };
        scope.getNodes = function() {
          var nodes = _(scope.nodes.value)
              .map(function(it) {
                return it.value;
              })
              .compact()
              .unique()
              .value();
          return nodes;
        };

        update();

        scope.$watchCollection("getNodes()", function(newValue) {
          update();
        });
        scope.$watch("direction.value", function() {
          update();
        });
      }
    };
  });

})();
