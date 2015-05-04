'use strict';

var assert = require('assertthat');
var cases = require('cases');

var choparray = require('../lib/choparray');

suite('choparray', function() {
  suite('sync', function() {
    test(' returns -1 for an empty array.', function(done) {
      assert.that(choparray.sync(23, [])).is.equalTo(-1);
      done();
    });

    test(' returns -1 if the given element is not found', function(done) {
      assert.that(choparray.sync(23, [ 2, 3, 5, 7])).is.equalTo(-1);
      done();
    });

    // 3  [2,3,5,7] 1
    // 5  [2,3,5,7] 2
    // 7  [2,3,5,7] 3
    test(' returns index if element is found in array', cases([
      [ 3, [2,3,5,7], 1 ],
      [ 5, [2,3,5,7], 2 ],
      [ 7, [2,3,5,7], 3 ]
    ], function(element, array, expected, done) {
      assert.that(choparray.sync(element, array)).is.equalTo(expected);
      done();
    }));

    test(' returns first position if element is found multiple times', function(done) {
      assert.that(choparray.sync(23, [ 2, 3, 5, 7, 20, 21, 22, 23, 35, 23])).is.equalTo(7);
      done();
    });

  });

  suite('async', function() {
    test(' returns first position if element is found multiple times', function(done) {
      choparray.async(3, [ 2, 3, 3, 5, 7 ], function(actual) {
        assert.that(actual).is.equalTo(1);
        done();
      });

    });
  });

});
