function createAry(arr, length, min, max) {
  if (!arr || arr.constructor !== Array) {
    arr = [];
  }
  if (arr.length < length) {
    var n = createNumber(arr, min, max);
    arr.push(n);
    return createAry(arr, length, min, max);
  }
  return arr;
}

function createNumber(arr, min, max) {
  var n = parseInt((Math.random() * max), 10);
  if (arr.indexOf(n) > -1 || n < min || n > max) {
    return createNumber(arr, min, max);
  }
  return n;
}

console.log(createAry(null, 5, 2, 32));