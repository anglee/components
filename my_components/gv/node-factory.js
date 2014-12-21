(function() {
  "use strict";

  var module = angular.module("gv");

  module.factory("nodeFactory", function($q, $timeout) {
    var nodes = [];

    $timeout(function() {
      nodes = [
        "aaa",
        "bbb",
        "ccc"
      ];
    }, 1000);

    return {
      getNodes: function() {
        return nodes;
      }
    };
  });

})();
