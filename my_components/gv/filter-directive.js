(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("filter", function($q, nodeFactory, filterOps) {
    return {
      restrict: "E",
      templateUrl: "my_components/gv/filter.tmpl.html",
      scope: {
        type: "@",
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.getTypedFilterUrl = function() {
          return "filter-" + scope.type + ".html";
        };
        scope.getPreview = function() {
          var filter = scope.valueObj.value;
          return filterOps.filterToString(filter);
        };
      }
    };
  });

})();
