"use strict";

import rx from 'rx'

let observable = rx.Observable.create(function() {
  setTimeout(function() {
    observer.onNext(3);
  }, 1000);

  setTimeout(function() {
    observer.onCompleted();
  }, 2000);

  return function() {
    // do clean up if needed
    console.log('cleanup observable');
  }
});

let observer = rx.Observer.create(
    function(x) {
      console.log('onNext', x);
    },
    function(err) {
      console.log('onError', err);
    },
    function() {
      console.log('onCompleted');
    }
);

var subscription = observable.subscribe(observer);
//subscription.dispose();

