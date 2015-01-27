(function() {
  "use strict";

  var module = angular.module("gv");

  module.directive("addNewGraph", function(utils, nodeFactory, graphFactory) {
    var generateRandomName = function() {
      var graphs = graphFactory.getGraphs();
      for (var i = 0; i < 1000; ++i) {
        if (!_.find(graphs, { name: "myGraph_" + i })) {
          return "myGraph_" + i
        }
      };
    };

    return {
      restrict: "E",
      templateUrl: "addNewGraph.tmpl.html",
      scope: {
        done: "&"
      },
      link: function(scope, element, attrs) {


        scope.graph = {
          name: generateRandomName(),
          parent: { value: graphFactory.getFullGraph() },
          filters: []
        };

        console.log("scope.graph", scope.graph);
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
