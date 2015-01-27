(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('graphList', function(graphFactory) {
    return {
      restrict: 'E',
      templateUrl: "graphList.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {

        scope.getGraphs = function() {
          return graphFactory.getGraphs();
        };

        scope.superG = {
          value: graphFactory.getFullGraph()
        };

        scope.currentG = {
          name: "Current",
          parent: "Full",
          filters: [["bfs", "INOUT", "nodeA"]]
        };

        scope.isAddingNewGraph = false;

        scope.addNewFilter = function() {
          scope.isAddingNewGraph = true;
        };

        scope.add = function(graph) {
          scope.isAddingNewGraph = false;
          if (graph) {
            graphFactory.addGraph(graph);
          }
        };

        scope.edit = function(graph) {
          console.log("Not supported yet");
        };
        scope.delete = function(graph) {
          // TODO, confirm delete first
          graphFactory.deleteGraph(graph);
        };
        scope.setAsSuper = function(graph) {
          scope.superG.value = graph;
        };
        scope.setAsCurrent = function(graph) {
          scope.currentG = graph;
        };

        scope.isNotFull = function(graph) {
          return graph.name !== "Full";
        };
      }
    };
  });

})();
