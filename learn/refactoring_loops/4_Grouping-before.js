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

function airportData(data) {
  //const data = flightData();
  const count = {};
  const cancellations = {};
  const totalDelay = {};
  for (let row of data) {
    const airport = row.dest;
    if (count[airport] === undefined) {
      count[airport] = 0;
      cancellations[airport] = 0;
      totalDelay[airport] = 0;
    }
    count[airport]++;
    if (row.cancelled) {
      cancellations[airport]++ ;
    }
    else {
      totalDelay[airport] += row.delay;
    }
  }

  const result = {};
  for (let i in count) {
    result[i] = {};
    result[i].meanDelay = totalDelay[i] / (count[i] - cancellations[i]);
    result[i].cancellationRate = cancellations[i] / count[i];
  }
  return result;
}

console.log(airportData(FLIGHT_DATA));