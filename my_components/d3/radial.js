(function() {
  "use strict";

  var _width = 400;
  var _height = 400;

  var svg = d3.select('body').append('svg')
      .attr("width", _width)
      .attr("height", _height)
      .append("g")
      .attr("transform", "translate(" + _width / 2 + "," + _height / 2 + ")");

  var data = {
    transitionStartDegree: 45,
    transitionEndDegree: 350
  };

var transitionStartDegree = 45;
var transitionEndDegree = 350;

var arcFunction = d3.svg.arc()
    .outerRadius(_width / 4)
    .innerRadius(_width / 4 * 0.85)
    .startAngle(0)
    .endAngle(function(d) {
      return d * Math.PI / 180;
    });

  var path = svg.selectAll('path').data([data]).enter()
      .append('path')
      .style("fill", function(d, i) {
        return "#dd0000"
      })
      .attr("d", function(datum, index) {
        return arcFunction(datum.transitionStartDegree);
      })
      .transition()
      .duration(2000)
      .attrTween("d", function(datum, index, attr) {
        return function(t) { // t will grow from 0 to 1 during the transition
          var interpolateFunc = d3.interpolate(datum.transitionStartDegree, datum.transitionEndDegree);
          var endAngle = interpolateFunc(t);
          return arcFunction(endAngle);
        };
      });

})();
