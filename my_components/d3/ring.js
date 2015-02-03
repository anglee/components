(function() {
  "use strict";

  var width = 300;
  var height = 300;
  var radius = Math.min(width, height) / 2;
  $(document).ready(function() {

    var svg = d3.select('body').append('svg')
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append('circle')
        .attr("r", radius - 40)
        .attr("stroke", "black")
        .attr("stroke-width", 10)
        .attr("fill", "none");

    var data = [
      {
        population: 1000
      },
      {
        population: 2000
      }
    ];

    var color = d3.scale.ordinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.population; });

    var arc = d3.svg.arc()
        .outerRadius(radius - 20)
        .innerRadius(radius - 60);

    var g = svg.selectAll(".arc")
        //.data(pie(data))
        .data([{
          padAngle: 0,
          startAngle: 0,
          endAngle: 0.75 * Math.PI,
          value: 400
        }])
        .enter()
        .append("g");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d, i) {
          return color(i)
        });
  });


})();
