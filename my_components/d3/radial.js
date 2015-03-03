(function() {
  "use strict";

  var __width = 400;
  var __height = 400;


  var svg = d3.select('body').append('svg')
      .attr("width", __width)
      .attr("height", __height)
      .append("g")
      .attr("transform", "translate(" + __width / 2 + "," + __height / 2 + ")");

  var data = {
    transitionStartDegree: 45,
    transitionEndDegree: 360,
    endAngle: 40
  };


  var _width = 200;
  var _height = _width;
  var _fontSize = _width * 0.2;

  var arcFunction = d3.svg.arc()
      .outerRadius(__width / 4)
      .innerRadius(__width / 4 * 0.85)
      .startAngle(0)
      .endAngle(function(d) {
        return d * Math.PI / 180;
      });

  var arcTween = function(datum, index, attr) {
    var interpolateFunc = d3.interpolate(datum.transitionStartDegree, datum.transitionEndDegree);
    return function(t) { // t will grow from 0 to 1 during the transition
      var endAngle = interpolateFunc(t);
      datum.endAngle = endAngle;
      return arcFunction(endAngle);
    };
  };
  var textTween = function(datum) {
    var interpolateFunc = d3.interpolate(datum.transitionStartDegree, datum.transitionEndDegree);
    return function(t) { // t will grow from 0 to 1 during the transition
      var endAngle = interpolateFunc(t);
      this.textContent = endAngle.toFixed(0);
    };
  };

  var enter = svg.selectAll('path').data([data]).enter()

  var path = enter.append('path')
      .style("fill", function(d, i) {
        return "#dd0000"
      })
      .attr("d", function(datum, index) {
        return arcFunction(datum.transitionStartDegree);
      })
      .transition()
      .duration(2000)
      .attrTween("d",arcTween);

  var text = enter.append('text')
      .attr("class", "label")
      .attr("y", _fontSize / 3)
      .text(data.transitionStartDegree)
      .style("font-size", _fontSize + "px")
      .transition()
      .duration(2000)
      .tween("text", textTween);

  svg.on("click", function() {
    console.log("clicked", data);
    data.transitionStartDegree = data.endAngle;
    data.transitionEndDegree = _.random(0, 360);
    svg.selectAll('path')
        .transition()
        .duration(2000)
        .attrTween("d",arcTween);
    svg.selectAll('text')
        .transition()
        .duration(2000)
        .tween("text", textTween);
  })


})();
