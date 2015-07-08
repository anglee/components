var AUTHORS = [
  {name: "Ang", twitterHandle: "anglee", company: "AppNexus"},
  {name: "Ben", twitterHandle: "bng", company: "AppNexus"},
  {name: "Jeff", twitterHandle: "jchendy", company: "TwoSigma"}
];

var getTwitterHandles = function (authors, company) {
  var result = [];
  for (var i in authors) {
    var a = authors[i];
    if (a.company === company) {
      var handle = a.twitterHandle;
      if (handle != null) {
        result.push(handle);
      }
    }
  }
  return result;
};

var handles = getTwitterHandles(AUTHORS, "AppNexus");
console.log(handles);


