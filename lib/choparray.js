'use strict';

var indexOf = function(number, array) {
  if(array.length === 0) {
    return -1;
  }

  if(array[0] !== number) {
    var index = indexOf(number, array.slice(1));
    return (index === -1) ? -1 :  index + 1;
  }

  return 0;
};

var chopArrayAsync = function(number, array, callback) {
  var result = indexOf(number, array);
  setTimeout(function() {
    callback(result);
  }, 0.1 * 1000);
};

var chopArray = function(number, array) {
  return indexOf(number, array);
};



module.exports = {
  sync: chopArray,
  async: chopArrayAsync
};
