(function() {
  "use strict";

  var _width = 400;
  var _height = 400;

  var svg = d3.select('body').append('svg')
      .attr("width", _width)
      .attr("height", _height)

  var rect = svg.selectAll('rect').data([{w: 100, h: 100}])
      .enter()
      .append("rect")
      .style("fill", "#AA0000")
      .attr("width", function(d) {
        return d.w;
      })
      .attr("height", function(d) {
        return d.h;
      });

  $('rect').click(function() {
    // chaining 2 transitions
    rect.data([{w: _.random(200), h: _.random(200)}])
        //.transition()
        //.duration(1000)
        .attr("width", function(d) {
          return d.w;
        })
        //.transition()
        //.duration(1000)
        .attr("height", function(d) {
          return d.h;
        });
  });


})();
