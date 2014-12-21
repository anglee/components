(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("filter", function($q, nodeFactory) {
    return {
      restrict: "E",
      templateUrl: "my_components/gv/filter.tmpl.html",
      scope: {
        type: "@",
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        console.log(scope.valueObj);
        scope.getTypedFilterUrl = function() {
          return "filter-" + scope.type + ".html";
        };
      }
    };
  });

})();
