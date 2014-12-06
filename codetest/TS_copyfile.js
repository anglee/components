var _ = require("lodash");
var copyfile = function(input) {
  var dataCenterCount = 0;
  var dataMap = {};
  var allData = [];
  _.each(input.split("\n"), function(line, i) {
    if (i === 0) {
      dataCenterCount = parseInt(line);
    } else {
      var centerId = i;
      if (_.isEmpty(line)) { return; }
      var dataIds = line.split(" ").map(function(it) {
        return parseInt(it);
      });
      dataIds.forEach(function(dataId) {
        if (!dataMap[dataId]) {
          allData.push(dataId);
          dataMap[dataId] = centerId;
          // this is the first time this data Id is encountered
          // copy it to all prev centers
          _.range(1, centerId).forEach(function(prevCenterId) {
            console.log(dataId, centerId, prevCenterId);
          });
        }
      });
      // copy the data Ids that are missing in the current center from dataMap[theMissingId]
      _.difference(allData, dataIds).forEach(function(dataId) {
        console.log(dataId, dataMap[dataId], centerId);
      });
    }
  });
};

copyfile(
    "4\n" // 4 data centers
    + "1 3 4\n" // the 1st center has data with ID's 1, 3, 4
    + "1 2 3\n" // the 2nd center has data with ID's 1, 2, 3
    + "1 3\n"   // the 3rd center has data with ID's 1, 3
    + "1 4 2\n");// the 4th center has data with ID's 1, 4, 2
