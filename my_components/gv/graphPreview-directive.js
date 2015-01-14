(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('graphPreview', function(filterOps) {
    return {
      restrict: 'E',
      templateUrl: "my_components/gv/graphPreview.tmpl.html",
      scope: {
        graph: "="
      },
      link: function(scope, element, attrs) {
        scope.getPreview = function() {
          return filterOps.graphToString(scope.graph);
        };
      }
    };
  });

})();
