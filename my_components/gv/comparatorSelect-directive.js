(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("comparatorSelect", function() {
    var COMPARATORS = ["LT", "LTE", "GT", "GTE"];
    return {
      restrict: "E",
      templateUrl: "my_components/gv/comparatorSelect.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.comparators = COMPARATORS;
        if (!scope.valueObj.value) {
          scope.valueObj.value = "LT";
        }
      }
    };
  });

})();
