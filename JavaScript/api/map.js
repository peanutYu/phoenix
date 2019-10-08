Array.prototype.MyMap = function(fn, context) {
  var arr = Array.prototype.slice.call(this);
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn.call(context, arr[i], i, this));
  }
  return newArr;
}


var a = [1,2,3];

var b = a.MyMap(function(item, index, array) {
  return item + 1;
});

console.log(b);