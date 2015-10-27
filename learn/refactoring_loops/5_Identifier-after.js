import _ from "lodash";

var ids = [{
  scheme: "x"
}, {
  scheme: "y"
}, {
  scheme: "z"
}];

var checkNoDuplicateIds = function(errors) {
  var dups = _(ids)
      .reject(id => id.void)
      .map(id => id.scheme)
      .countBy()
      .pick(count => count > 1)
      .keys()
      .value();
  if (dups.length > 0) {
    errors.push("duplicated schemes: " + dups.join(", "));
  }
};
var checkAllRequiredSchemes = function(required_schemes, errors) {
  var missing = _.difference(required_schemes, ids.filter(id => !id.void).map((id) => id.scheme));
  if (missing.length > 0) {
    errors.push("missing schemes: " + missing.join(', '));
  }
};

var check_valid_ids = function(required_schemes) {
  var errors = [];

  checkNoDuplicateIds(errors);
  checkAllRequiredSchemes(required_schemes, errors);

  return errors.length ? errors : "valid";
};

// ----
console.log(check_valid_ids(["x", "y"]));
console.log(check_valid_ids(["a", "y"]));

ids.push({
  scheme: "x"
});

console.log(check_valid_ids(["x", "y"]));

