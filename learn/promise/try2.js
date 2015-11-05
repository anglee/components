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
  return delay(2000).then(function() { return "A"; });
};
var taskB = function () {
  return delay(1000).then(function() { return "B"; });
};



//taskA();
//taskB();

//Promise.race([taskB(), taskA()]);
function timeout(promise, time) {
  return Promise.race([promise, delay(time).then(function () {
    throw new Error('Operation timed out');
  })]);
}
//timeout(taskA(), 5000).then(log, log);
Promise.race([taskA(), taskB()]).then(log);

console.log("run");
