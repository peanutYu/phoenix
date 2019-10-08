'use strict;'
function _const (name, value) {
  // this[name] = value;
  Object.defineProperty(this, name, {
    configurable: false,
    enumerable: false,
    get: function() {
      return value;
    },
    set: function(data) {
      if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！
        throw new TypeError('Assignment to constant variable.')
      } else {
        return value
      }
    },
  });
}



_const('a', {});
console.log(a);
a.b = 1;
console.log(a);



