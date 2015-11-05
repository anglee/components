var delay = function (ms, interruptP) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, ms);
    if (interruptP) {
      interruptP.then(function () {
        reject(new Error("interrupted"));
      });
    }
  });
};

var log = function (it) {
  console.log(it);
};

var validate = function (ms) {
  console.log("validate started");
  return delay(ms)
      .then(function() {
        console.log("validate finished", ms);
        return "validate result";
      });
};

var showSpinner = function (ms, cancelP) {
  // show spinner after ms
  // if cancelP is fulfilled within ms, this is interrupted and the spinner will not shown
  return delay(ms, cancelP)
      .then(function() {
        console.log("show spinner", ms);
      });
};


validateAndShowSpinnerIfTakingTooLong = function (validationTime, tooLong) {
  var validateP = validate(validationTime);
  showSpinner(tooLong, validateP);
  return validateP;
};

validateAndShowSpinnerIfTakingTooLong(2000, 1000);

delay(2500)
    .then(function () {
      console.log("----");
    })
    .then(function () {
      validateAndShowSpinnerIfTakingTooLong(1000, 2000);
    });
