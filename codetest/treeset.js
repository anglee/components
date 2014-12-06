var _ = require("lodash");
var newTreeSet = function() {
  var _data = [];

  return {
    add: function(p) {
      var id = _.sortedIndex(_data, p);
      if (p !== _data[id]) {
          _data.splice(id, 0, p);
      }
    },
    get: function() {
      return _data;
    }
  };
};

var treeset = newTreeSet();
_.shuffle(_.range(5)).forEach(function(it) {
  treeset.add(it);
  console.log(treeset.get());
});