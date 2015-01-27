(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("nodeSelect", function($q, nodeFactory) {
    return {
      restrict: "E",
      templateUrl: "nodeSelect.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.getNodes = function() {
          return nodeFactory.getNodes();
        };
      }
    };
  });

})();
