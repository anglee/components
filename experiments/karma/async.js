var async = {
  foo: function() {
    return Q.when("Hello");
  },
  oops: function() {
    return Q.fcall(function() {
      throw new Error("Sorry");
    });
  }
};