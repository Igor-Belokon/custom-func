Array.prototype.customFilter = function (callback, thisArg) {
    var array = Object(this);
    var result = [];
    var length = array.length;
  
    for (var i = 0; i < length; i++) {
      if (i in array) {
        var value = array[i];
  
        if (callback.call(thisArg, value, i, array)) {
          result.push(value);
        }
      }
    }
  
    return result;
  };
  
  console.log([1, 6, 7, 11, 14, 17, 20].customFilter(element => element % 2 === 0));


//test 1 
  const words = [ 'lilit', 'abbadon', 'Gerald', 'mic', 'igor'];
  console.log(words.customFilter(word => word.length > 5));