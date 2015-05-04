'use strict';

var assert = require('assertthat');
var choparray = require('../lib/choparray');

suite('choparray', function() {
  test(' returns -1 for an empty array.', function() {
    // Arrange
    var array = [],
        element = 23;

    var expected = -1;

    // Act
    var actual = choparray(element, array);

    // Assert

  });

  test(' returns -1 if the given element is not found');

  test(' returns index if element is found in array');

  test(' returns first position if element is found multiple times');

});
