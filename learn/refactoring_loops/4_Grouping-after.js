import _ from "lodash";

const FLIGHT_DATA = [
  {
    "origin": "BOS", "dest": "LAX", "date": "2015-01-12",
    "number": "25", "carrier": "AA", "delay": 0.0, "cancelled": false
  },
  {
    "origin": "BOS", "dest": "LAX", "date": "2015-01-13",
    "number": "25", "carrier": "AA", "delay": 30.0, "cancelled": false
  },
  {
    "origin": "BOS", "dest": "LAX", "date": "2015-01-14",
    "number": "25", "carrier": "AA", "delay": 0.0, "cancelled": true
  },
  {
    "origin": "BOS", "dest": "LAX", "date": "2015-01-15",
    "number": "25", "carrier": "AA", "delay": 0.0, "cancelled": false
  },
  {
    "origin": "EWR", "dest": "ATL", "date": "2015-01-12",
    "number": "25", "carrier": "AA", "delay": 0.0, "cancelled": false
  },
  {
    "origin": "EWR", "dest": "ATL", "date": "2015-01-13",
    "number": "25", "carrier": "AA", "delay": 100.0, "cancelled": false
  },
  {
    "origin": "EWR", "dest": "ATL", "date": "2015-01-14",
    "number": "25", "carrier": "AA", "delay": 0.0, "cancelled": true
  },
  {
    "origin": "EWR", "dest": "ATL", "date": "2015-01-15",
    "number": "25", "carrier": "AA", "delay": 0.0, "cancelled": true
  }
];

var summarize = function (flights) {
  return {
    count: flights.length,
    cancellations: _.filter(flights, f => f.cancelled).length,
    totalDelay: _.filter(flights, f => !f.cancelled).map(f => f.delay).reduce((a,b) => a+b)
  };
};

var generateStats = function (summary) {
  return {
    meanDelay: summary.totalDelay / (summary.count - summary.cancellations),
    cancellationRate: summary.cancellations / summary.count
  };
};

function airportData(data) {
  return _(data)
      .groupBy(data => data.dest)
      .mapValues(summarize)
      .mapValues(generateStats)
      .value();
}

console.log(airportData(FLIGHT_DATA));