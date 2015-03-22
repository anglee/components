var expect = chai.expect;

describe("async", function() {
  describe("foo", function() {
    it("should say Hello asynchronously", function(done) {
      async.foo().then(function(what) {
        expect(what).to.equal("Hello");
        done();
      }, function(err) {
        done(err);
      });
    });
  });
  describe("oops", function() {
    it("should throw Sorry", function(done) {
      async.oops().then(function(what) {
        done(new Error("Didn't throw"));
      }, function(err) {
        expect(err.message).to.equal("Sorry");
        done();
      });
    });
  });
});