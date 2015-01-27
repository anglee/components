/* Created by alee on 12/21/14. */
(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("addNewFilter", function() {
    return {
      restrict: "E",
      templateUrl: "addNewFilter.tmpl.html",
      scope: {
        done: "&"
      },
      link: function(scope, element, attrs) {
        scope.type = {
          value: "bfs"
        };
        scope.filter = {
          value: [123,4]
        };
        scope.ok = function() {
          //console.log(scope.filter);
          scope.done({filter: scope.filter.value});
        };
        scope.cancel = function() {
          scope.done({});
        };
      }
    };
  });

})();
