var LRU = (function() {
  var head = null;
  var tail = null;
  var length = 0;
  var limit = 100;
  var map = {};

  var deleteFromList = function(node) {
    var prev = node.prev;
    var next = node.next;
    prev.next = next;
    next.prev = prev;

    if (node === tail) {
      tail = node.prev;
    }
    if (node === head) {
      head = node.next;
    }
    length--;
  };

  var addToHead = function(node) {
    head.prev = node;
    node.next = head;
    head = node;
    if (tail === null) {
      tail = node;
    }
    length++;
  };

  var removeFromTail = function() {
    delete map[tail.key];
    tail = tail.prev;
    tail.next = null;
    length--;
  };

  return {
    put: function(key, value) {
      var node = map[key];
      if (node) {
        deleteFromList(node);
      } else {
        node = {
          key: key,
          value: value
        };
        map[key] = node;
      }
      addToHead(node);
      if (length > limit) {
        removeFromTail();
      }
    },
    get: function(key) {
      if (map[key]) {
        var node = map[key];
        deleteFromList(node);
        addToHead(node);
      } else {
        return null;
      }
    }
  }
})();