'use strict';

var assert = require('assertthat');
var cases = require('cases');

var choparray = require('../lib/choparray');

suite('choparray', function() {
  test(' returns -1 for an empty array.', function() {
    assert.that(choparray(23, [])).is.equalTo(-1);
  });

  test(' returns -1 if the given element is not found', function() {
    assert.that(choparray(23, [ 2, 3, 5, 7])).is.equalTo(-1);
  });

  // 3  [2,3,5,7] 1
  // 5  [2,3,5,7] 2
  // 7  [2,3,5,7] 3
  test(' returns index if element is found in array', cases([
    [ 3, [2,3,5,7], 1 ],
    [ 5, [2,3,5,7], 2 ],
    [ 7, [2,3,5,7], 3 ]
  ], function(element, array, expected) {
    assert.that(choparray(element, array)).is.equalTo(expected);
  }));

  test(' returns index if element is found in array', function() {
    assert.that(choparray(23, [ 2, 3, 5, 7, 23])).is.equalTo(4);
  });

  test(' returns first position if element is found multiple times', function() {
    assert.that(choparray(23, [ 2, 3, 5, 7, 20, 21, 22, 23, 35, 23])).is.equalTo(7);
  });

});
