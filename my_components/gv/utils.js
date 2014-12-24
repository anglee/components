(function() {
  "use strict";

  var module = angular.module("gv");

  module.factory("utils", function($q, $timeout) {

    var filterToString = function(filter) {
      if (filter[0] !== "union") {
        return filter.join(',');
      } else {
        var theOtherGraph = filter[1];
        var theOtherGraphStr = graphToString(theOtherGraph);
        var length = theOtherGraphStr.match(/\//g).length;
        return theOtherGraphStr + "/union,0," + length;
      }
    };

    var graphToString = function(graph) {
      var ret = "/";
      graph.forEach(function(filter) {
        ret += filterToString(filter);
      });
      return ret;
    };


    var utils = {
      filterToString: filterToString,
      graphToString: graphToString
    };

    window.utils = utils;

    return utils;
  });

})();
