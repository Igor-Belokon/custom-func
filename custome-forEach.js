Array.prototype.customForEach = function (callback, thisArg) {

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
  
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  
  };
  const arr =["testing", "my", "custom", "method", "forEach"]
  arr.customForEach(element => console.log(element));