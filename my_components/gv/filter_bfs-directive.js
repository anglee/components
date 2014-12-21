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
        console.log(scope.valueObj);

        scope.direction = {
          value: "IN"
        };
        scope.nodes = [
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

        var update = function() {
          scope.valueObj.value = [
            "bfs",
            scope.direction.value
          ].concat(scope.getNodes());
        };
        scope.getNodes = function() {
          var nodes = _(scope.nodes)
              .map(function(it) {
                return it.value;
              })
              .unique()
              .value();
          return nodes;
        };

        update();
        scope.$watchCollection("getNodes()", function(newValue) {
          console.log("UPDATE", newValue);
          update();
        });
      }
    };
  });

})();
