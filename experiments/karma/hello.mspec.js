var expect = chai.expect;

describe("hello", function() {
  it("true is true", function() {
    expect(true).to.be.true;
  });
  it("false is true", function() {
    expect(false).to.not.be.true;
  });
  it("should say hello", function() {
    expect(hello.saySomething()).to.equal("Hello");
  });
});