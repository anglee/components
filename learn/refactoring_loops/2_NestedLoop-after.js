var _ = require("lodash");

var dataService = {
  getBooksReadOn: function (date) {
    return {
      "ra": ["b1", "b3"],
      "rb": ["b5"],
      "rc": ["b2"]
    };
  }
};

var getReadersOfBooks = function(readers, books, date) {
  var data = dataService.getBooksReadOn(date);
  return _(data).pick((bks, person) => _.includes(readers, person))
      .pick((bks, person) => !_.isEmpty(_.intersection(books, bks)))
      .map((bks, person) => person)
      .value();
};

const READERS = ["ra", "rb"];
const BOOKS = ["b1", "b2"];
const DATE = 2015;

console.log(getReadersOfBooks(READERS, BOOKS, DATE)); // [ "ra" ]
