import Rx from 'rx'

var clock = Rx.Observable.interval(500).take(10).map(x => x + 1);

clock.subscribe(i => console.log('a: ' + i));
