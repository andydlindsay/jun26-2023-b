// load JSON from server and show an animation of the data

var data;
var svg;
var width;
var height;
var xScale;
var yScale;
var xAxis;
var yAxis;
var line;
var path;

$(document).ready(function(){

  // load data from server
  $.getJSON('/data', function(data){
    var svg = d3.select('svg');
    var width = +svg.attr('width');
    var height = +svg.attr('height');
    var padding = 20;
    var xScale = d3.scaleLinear()
      .domain([0, d3.max(data, function(d){ return d.x; })])
      .range([padding, width - padding]);
    var yScale = d3.scaleLinear()
      .domain([0, d3.max(data, function(d){ return d.y; })])
      .range([height - padding, padding]);
    var rScale = d3.scaleLinear()
      .domain([0, d3.max(data, function(d){ return d.r; })])
      .range([2, 5]);
    var aScale = d3.scaleSqrt()
      .domain([0, d3.max(data, function(d){ return d.a; })])
      .range([0, 2 * Math.PI]);
    var cValue = function(d){ return d.c; };
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', function(d){ return xScale(d.x); })
      .attr('cy', function(d){ return yScale(d.y); })
      .attr('r', function(d){ return rScale(d.r); })
      .style('fill', function(d){ return color(cValue(d)); })
      .on('mouseover', function(d){
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r', function(d){ return rScale(d.r) * 2; });
        svg.append('text')
          .attr('id', 't' + d.c.replace(/\s/g, ''))
          .attr('x', function(){ return xScale(d.x) - 30; })
          .attr('y', function(){ return yScale(d.y) - 15; })
          .text(function(){ return [d.c, d.x, d.y, d.r, d.a].join(', '); });
      })
      .on('mouseout', function(d){
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r', function(d){ return rScale(d.r); });
        d3.select('#t' + d.c.replace(/\s/g, ''))
          .remove();
      }); // end mouseover
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    svg.append('g')
      .attr('transform', 'translate(0,' + (height - padding) + ')')
      .call(xAxis);
    svg.append('g')
      .attr('transform', 'translate(' + padding + ',0)')
      .call(yAxis);
  }); // end getJSON

d3.json('data.json', function(err, json){
  if(err) throw err;
  data = json;
  update();
});

alert('hello');
});

// calculate the number of days between now and Christmas
$.get('/days', function(data){
  $('#days').text(data.days);
});
