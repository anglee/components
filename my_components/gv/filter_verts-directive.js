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
      }
    };
  });

})();
