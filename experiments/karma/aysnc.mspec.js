var expect = chai.expect;

describe("async", function() {
  describe("foo", function() {
    // use done()
    it("should say Hello asynchronously", function(done) {
      async.foo().then(function(what) {
        expect(what).to.equal("Hello");
        done();
      }, function(err) {
        done(err);
      });
    });
    // use Promise
    it("should say Hello as promised", function() {
      return async.foo().then(function(what) {
        expect(what).to.equal("Hello");
      });
    });
  });
  describe("oops", function() {
    // use done()
    it("should throw Sorry", function(done) {
      async.oops().then(function(what) {
        done(new Error("Didn't throw"));
      }, function(err) {
        expect(err.message).to.equal("Sorry");
        done();
      });
    });
    // use Promise
    it("should throw Sorry as promised", function() {
      return async.oops().catch(function(err) {
        expect(err.message).to.equal("Sorry");
      });
    });
  });
});