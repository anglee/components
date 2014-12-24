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
          //var ret = scope.valueObj.value.join(",");
          //if (ret[0] !== "/") {
          //  ret = "/" + ret;
          //}
          //return ret;
          var filter = scope.valueObj.value;
          console.log("filter = ", filter);
          return filterOps.filterToString(filter);
        };
      }
    };
  });

})();
