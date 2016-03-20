/**
 * Created by anglee on 11/25/15.
 */

var log = function (it) {
  console.log(new Date().getSeconds(), it, "NOT ERROR");
};

var logError = function (it) {
  console.error(new Date().getSeconds(), it, "ERROR");
};

var doTaskAdoTaskA = function () {
  log("doingTaskA");
  return Promise.resolve("A");
};
var doTaskB = function () {
  log("doingTaskB");
  return Promise.reject("B");
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

doTaskB()
    .catch(function (err) {
      console.log("caught");
    	return Promise.reject("AAA");
    })
    .then(log, logError);