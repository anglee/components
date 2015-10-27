"use strict";

import rx from 'rx'

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

observer.onNext(1);
observer.onNext(2);
observer.onCompleted();
observer.onError(new Error('Oops...'));

/*
 observer.onNext(1);
 observer.onNext(2);
 observer.onError(new Error('Oops...'));
 observer.onCompleted();
 */
