(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("graphSelect", function($q, graphFactory) {
    return {
      restrict: "E",
      templateUrl: "my_components/gv/graphSelect.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.getGraphs = function() {
          return graphFactory.getGraphs();
        }
      }
    };
  });

})();
