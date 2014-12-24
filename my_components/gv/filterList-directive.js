(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('filterList', function() {
    return {
      restrict: 'E',
      templateUrl: "my_components/gv/filterList.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {

        scope.getFilters = function() {
          return scope.valueObj;
        };
        scope.add = function(filter) {
          if (filter) {
            scope.getFilters().push(filter);
          }
        };
        scope.remove = function(filter) {
          var filters = scope.getFilters();
          var index = filters.indexOf(filter);
          filters.splice(index, 1);
        };
      }
    };
  });

})();
