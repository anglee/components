

var showSpinner = function () {
	console.log("spinner - show");
};

var hideSpinner = function () {
	console.log("spinner - hide");
};

var validate = function () {
	console.log("validate - start");
  setTimeout(function() {
    clearTimeout(timeoutId);
    console.log("validate - end");
    hideSpinner();
  }, 2000);
};

validate();

var timeoutId = setTimeout(function () {
  showSpinner();
}, 4000);

console.log("run");