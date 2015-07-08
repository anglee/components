var _ = require("lodash");

var AUTHORS = [
  {name: "Ang", twitterHandle: "anglee", company: "AppNexus"},
  {name: "Ben", twitterHandle: "bng", company: "AppNexus"},
  {name: "Jeff", twitterHandle: "jchendy", company: "TwoSigma"}
];

var getTwitterHandles = function (authors, company) {
  return _(authors)
      .filter(function (a) {
        return a.company === company && a.twitterHandle != null;
      })
      .map(function (a) {
        return a.twitterHandle;
      })
      .value();
};

var handles = getTwitterHandles(AUTHORS, "AppNexus");
console.log(handles);


