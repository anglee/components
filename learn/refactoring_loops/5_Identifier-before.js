
var ids = [{
  scheme: "x"
}, {
  scheme: "y"
}, {
  scheme: "z"
}];

var check_valid_ids = function(required_schemes) {
  var errors = [];

  var used = [];
  var dups = [];
  var missing_required = required_schemes.slice(0);

  for (var id of ids) {
    if (id.void) {
      continue;
    }
    if (used.indexOf(id.scheme) !== -1) {
      dups.push(id.scheme);
    } else {
      for (var req of required_schemes) {
        if (id.scheme === req) {
          missing_required.splice(missing_required.indexOf(req), 1);
        }
      }
    }

    used.push(id.scheme);
  }

  if (dups.length > 0) {
    errors.push("duplicated schemes: " + dups.join(", "));
  }

  if (missing_required.length > 0) {
    var missing_names = "";
    for (req of missing_required) {
      missing_names += (missing_names.size > 0) ? ", " + req : req
    }
    errors.push("missing schemes: " + missing_names);
  }

  return errors.length ? errors : "valid";
};


// ----
console.log(check_valid_ids(["x", "y"]));
console.log(check_valid_ids(["a", "y"]));

ids.push({
  scheme: "x"
});

console.log(check_valid_ids(["x", "y"]));

