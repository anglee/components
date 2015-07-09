const AUTHORS = [
  {name: "Ang", twitterHandle: "anglee", company: "AppNexus"},
  {name: "Ben", twitterHandle: "bng", company: "AppNexus"},
  {name: "Jeff", twitterHandle: "jchendy", company: "TwoSigma"}
];

var getTwitterHandles = function (authors, company) {
  const result = [];
  for (let i in authors) {
    const a = authors[i];
    if (a.company === company) {
      const handle = a.twitterHandle;
      if (handle != null) {
        result.push(handle);
      }
    }
  }
  return result;
};

const handles = getTwitterHandles(AUTHORS, "AppNexus");
console.log(handles);


