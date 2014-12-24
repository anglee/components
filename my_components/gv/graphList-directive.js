(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('graphList', function(graphFactory) {
    return {
      restrict: 'E',
      templateUrl: "my_components/gv/graphList.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        scope.graphs = graphFactory.getGraphs();

        scope.isAddingNewGraph = false;

        scope.addNewFilter = function() {
          scope.isAddingNewGraph = true;
        };

        scope.add = function(graph) {
          scope.isAddingNewGraph = false;
          if (graph) {
            console.log("Add Graph", graph);
            //scope.graphs.add({
            //  name: graph.name,
            //  parent: graph.parent,
            //  generator: graph.filters
            //});
            //graphFactory.addGraph(...)
          }
        };
      }
    };
  });

})();
