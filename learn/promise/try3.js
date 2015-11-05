var delay = function (ms) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, ms)
  });
};

var log = function (it) {
  console.log(it);
};

var taskA = function () {
  return delay(500).then(function() { return "A"; });
};
var ifTakeTooLongShowSpinner = function (promise, ms) {
  var showSpinner = delay(ms).then(function () {
  	console.log("Spinner");
    return promise;
  });
  return Promise.race([promise, showSpinner]);
};

ifTakeTooLongShowSpinner(taskA(), 1000).then(log);
