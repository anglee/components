(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("addNewGraph", function($q, nodeFactory) {
    return {
      restrict: "E",
      templateUrl: "my_components/gv/addNewGraph.tmpl.html",
      scope: {
        done: "&"
      },
      link: function(scope, element, attrs) {
        scope.graph = {
          name: "",
          parent: null,
          filters: []
        };
        scope.addFilter = function() {
          console.log("Add filter");
        };
        scope.ok = function() {
          scope.done({graph: scope.graph});
        };
        scope.cancel = function() {
          scope.done({});
        };
        scope.getPreview = function() {
          
        };
      }
    };
  });

})();
