(function() {
  "use strict";

  var module = angular.module("gv");

  module.factory("graphFactory", function($q, $timeout) {
    var graphs = [];
    var fullGraph = {
      name: "Full",
      parent: null,
      filters: [["graph", "graphName"]]
    };

    var specialGraphs = [
      {
        name: "Current",
        parent: "Full",
        filters: [["bfs", "INOUT", "nodeA"]]
      },
      {
        name: "Super",
        parent: "Full",
        filters: [["bfs", "INOUT", "nodeA", "nodeB"], ["bfs", "INOUT", "nodeC", "nodeD"]]
      }
    ];

    $timeout(function() {
      graphs = [
        {
          name: "MyGraphA",
          parent: "Full",
          filters: [["verts", "nodeC"], ["union", "Full"]]
        },
        {
          name: "MyGraphB",
          parent: "Full",
          filters: [["verts", "nodeC"], ["union", "MyGraphA"]]
        }

      ];
    }, 0);

    var graphFactory = {
      getGraphs: function() {
        return [fullGraph].concat(graphs);
      },
      //addGraph: function(name, filters) {
      //  graphs.push({
      //    name: name,
      //    filters: filters
      //  });
      //},
      addGraph: function(graph) {
        graphs.push(graph);
      },
      deleteGraph: function(graph) {
        graphs.splice(graphs.indexOf(graph), 1);
      },
      getFullGraph: function() {
        return fullGraph;
      }
    };


    window.graphFactory = graphFactory;

    return graphFactory;
  });

})();
