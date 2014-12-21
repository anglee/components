(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("filterTypeSelect", function() {
    var filters = [
        "verts",
        "strength",
        "degree",
        "bfs",
        "union"
    ];
    return {
      restrict: "E",
      templateUrl: "my_components/gv/filterTypeSelect.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.getFilters = function() {
          return filters;
        }
      }
    };
  });

})();
