// 最新的 Javascript 标准规定了六种基本数据类型(number, null, undefined, string, boolean, symbol) 和基于 Object 衍生的其它原生数据类型，
// 写出 type 函数，它传入一个参数，返回它的数据类型（用小写字母），比如: type(new Date) ，返回 date。


function type (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

console.log(type(new Date()));
console.log(type(new String('abc')));
console.log(type(new Array(5).fill(4)));
console.log(type(new Number(10)));
console.log(type(new Object));
console.log(type(Symbol()));
