(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('filterStaticDisplay', function() {
    return {
      restrict: "E",
      templateUrl: "filterStaticDisplay.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        console.log("filterStaticDisplay");
        scope.getStaticText = function() {
          return scope.valueObj.join(",");
        };
      }
    }
  });

})();
