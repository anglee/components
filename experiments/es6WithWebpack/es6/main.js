import Point from './Point.js';
var body = document.querySelector('body');
body.textContent = 'Good point: ' + new Point(1, 23);


function* genFunc() {
  console.log('First');
  yield; // (A)
  console.log('Second'); // (B)
}

let genObj = genFunc();

console.log(genObj.next());

console.log(genObj.next());