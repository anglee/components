
var log = function (it) {
	console.log(new Date().getSeconds(), it);
};

var doTaskA = function () {
	log("doingTaskA");
  return Promise.resolve("A");
};
var doTaskB = function () {
	log("doingTaskB");
  return Promise.resolve("B");
};

var delay = function (ms) {
  return function (it) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(it);
      }, ms);
    });
  }
};

doTaskA()
  .then(delay(1000))
  .then(log)
  .then(delay(1000))
  .then(doTaskB)
  .then(delay(1000))
  .then(log);