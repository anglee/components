var _ = require("lodash");

var constructLinkList = function() {
  var prev = null;
  var head = null;
  _.range(10).forEach(function(it) {
    var node = {
      value: it,
      next: null
    };
    if (prev) {
      prev.next = node;
    } else {
      head = node;
    }
    prev = node;
  });
  return head;
};

var printLinkList = function(head) {
  var buffer = "";
  var n = head;
  while (n) {
    buffer += n.value;
    n = n.next;
  }
  console.log(buffer.split('').join(' '));
};

var reverse = function(head) {
  var n = head;
  var prev = null;
  var newHead = head;

  while (n) {
    newHead = n;
    var next = n.next;
    n.next = prev;
    prev = n;
    n = next;
  }

  return newHead;
};


var list = constructLinkList();

printLinkList(list);
printLinkList(reverse(list));


