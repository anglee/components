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
        generator: [["graph", "graphName"], ["bfs", "INOUT", "nodeA", "nodeB"]]
      }
    ];

    $timeout(function() {
      graphs = [
        {
          name: "MyGraphA",
          generator: [[""]]
        }
      ];
    }, 0);

    return {
      getGraphs: function() {
        return [].concat(specialGraphs).concat(graphs);
      }
    };
  });

})();
