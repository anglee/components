(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("nodeSelect", function($q, nodeFactory) {
    return {
      restrict: "E",
      templateUrl: "my_components/gv/nodeSelect.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.getNodes = function() {
          return nodeFactory.getNodes();
        }
      }
    };
  });

})();
