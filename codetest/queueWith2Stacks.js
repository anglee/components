var _ = require("lodash");
var queue = (function() {
  var inbox = [];
  var outbox = [];

  return {
    queue: function(it) {
      inbox.push(it);
    },
    dequeue: function() {
      if (outbox.length === 0) {
        while (inbox.length) {
          outbox.push(inbox.pop());
        }
      }
      return outbox.pop();
    }
  };
})();