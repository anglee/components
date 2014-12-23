(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('vertsSelect', function() {
    return {
      restrict: 'E',
      templateUrl: "my_components/gv/vertsSelect.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.getNodes = function() {
          return scope.valueObj.value;
        };

        scope.remove = function(node) {
          var nodes = scope.getNodes();
          var index = nodes.indexOf(node);
          nodes.splice(index, 1);
        };

        scope.add = function() {
          scope.getNodes().push({
            value: null
          });
        };
      }
    };
  });

})();
