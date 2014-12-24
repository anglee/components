(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('filterVerts', function() {
    return {
      restrict: 'E',
      templateUrl: "my_components/gv/filter_verts.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
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
            "verts",
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

        scope.$watchCollection("getNodes()", function(newValue) {
          update();
        });
      }
    };
  });

})();
