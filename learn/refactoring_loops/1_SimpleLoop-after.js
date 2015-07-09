import _  from "lodash";

const AUTHORS = [
  {name: "Ang", twitterHandle: "anglee", company: "AppNexus"},
  {name: "Ben", twitterHandle: "bng", company: "AppNexus"},
  {name: "Jeff", twitterHandle: "jchendy", company: "TwoSigma"}
];

const getTwitterHandles = function (authors, company) {
  return _(authors)
      .filter(function (a) {
        return a.company === company && a.twitterHandle != null;
      })
      .map(function (a) {
        return a.twitterHandle;
      })
      .value();
};

const handles = getTwitterHandles(AUTHORS, "AppNexus");
console.log(handles);


