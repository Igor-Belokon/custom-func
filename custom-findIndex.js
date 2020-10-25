Array.prototype.customFindIndex = function (callback) {
    let array = Object(this);
    let thisArg = arguments[1];
    let value;
  
    for (let i = 0; i < array.length; i++) {
      value = array[i];
      if (callback.call(thisArg, value, i, array)) {
        return i;
      }
    }
    const arr = [1, 12, 7, 11]
    const arr2 =["home work", "My dude", "master Gerald"]
    console.log(arr.customFindIndex(element => element % 2 === 0)); //1
    console.log(arr2.customFindIndex(element => element === "master Gerald")); //2  