(function() {
  "use strict";

  var module = angular.module("gv");

  module.factory("filterOps", function(graphFactory) {

    var getGraph = function(graphName) {
      var graphs = graphFactory.getGraphs();
      return _.find(graphs, function(it) {
        return it.name === graphName;
      });
    };

    var filterToString = function(filter, seenGraphs) {
      if (_.isEmpty(seenGraphs)) {
        seenGraphs = [];
      }
      if (filter[0] !== "union") {
        return "/" + filter.join(',');
      } else {
        var graphName = filter[1];
        if (_.contains(seenGraphs, graphName)) {
          throw new Error("Error: Union causing a loop (graph=" + graphName + ")");
        }
        var graph = getGraph(graphName);
        if (!graph) {
          throw new Error("Error: Couldn't find graph with name=" + graphName);
        }
        var graphString = graphToString(graph, seenGraphs);
        var length = graphString.match(/\//g).length;
        return graphString + "/union,0," + length;
      }
    };

    var graphToString = function(graph, seenGraphs) {
      if (!graph) {
        return "";
      }
      var ret = graphToString(getGraph(graph.parent));
      if (_.isEmpty(seenGraphs)) {
        seenGraphs = [graph.name];
      } else {
        seenGraphs = seenGraphs.concat(graph.name);
      }
      graph.filters.forEach(function(filter) {
        ret += filterToString(filter, seenGraphs);
      });
      return ret;
    };

    var filterOps = {
      filterToString: filterToString,
      graphToString: graphToString,
      _: {
        getGraph: getGraph
      }
    };

    window.f = filterOps;

    return filterOps;

  });

})();
