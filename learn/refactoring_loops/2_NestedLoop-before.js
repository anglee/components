var dataService = {
  getBooksReadOn: function (date) {

    return {
      "ra": ["b1", "b4"],
      "rb": ["b5"],
      "rc": ["b2"]
    };
  }
};

var getReadersOfBooks = function(readers, books, date) {
  var result = [];
  var data = dataService.getBooksReadOn(date);
  for (let key in data) {
    for (let bookId of books) {
        if (data[key].indexOf(bookId) !== -1 && readers.indexOf(key) !== -1) {
          result.push(key);
        }
    }
  }
  return result;
};

const READERS = ["ra", "rb"];
const BOOKS = ["b1", "b2"];
const DATE = 2015;

console.log(getReadersOfBooks(READERS, BOOKS, DATE)); // [ "ra" ]
