(function() {
  "use strict";

  var module = angular.module("gv");

  module.factory("graphFactory", function($q, $timeout) {
    var graphs = [];
    var specialGraphs = [
      {
        name: "Full",
        generator: [["graph", "graphName"]]
      },
      {
        name: "Current",
        generator: [["graph", "graphName"], ["bfs", "INOUT", "nodeA"]]
      },
      {
        name: "Super",
        generator: [["graph", "graphName"], ["bfs", "INOUT", "nodeA", "nodeB"], ["bfs", "INOUT", "nodeC", "nodeD"]]
      }
    ];

    $timeout(function() {
      graphs = [
        {
          name: "MyGraphA",
          generator: [["graph", "graphName"], ["verts", "nodeC"], ["union", "Super"]]
        },
        {
          name: "MyGraphB",
          generator: [["graph", "graphName"], ["verts", "nodeC"], ["union", "MyGraphA"]]
        }

      ];
    }, 0);

    var graphFactory = {
      getGraphs: function() {
        return [].concat(specialGraphs).concat(graphs);
      },
      addGraph: function(name, generator) {
        graphs.push({
          name: name,
          generator: generator
        });
      }
    };

    window.graphFactory = graphFactory;

    return graphFactory;
  });

})();
