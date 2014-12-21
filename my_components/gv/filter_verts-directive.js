(function() {
  "use strict";

  var module = angular.module('gv');
  module.directive('filterVerts', function() {
    return {
      restrict: 'E',
      templateUrl: "my_components/gv/filter_verts.tmpl.html",
      scope: {
        valueObj: "="
      },
      link: function(scope, element, attrs) {
        console.log(scope.valueObj);
      }
    };
  });

})();
