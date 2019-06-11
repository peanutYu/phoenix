// 国家有重要的任务要托付给你：完成间谍函数 spy，它可以潜伏到任何一个函数当中，监听它们的所有活动。spy 接受一个函数作为参数，返回一个被间谍潜伏以后的函数。

const spy = function(fn) {
  var calls = [];
  var f = function() {
    const args = [].slice.call(arguments);
    const result = fn.apply(this, args);
    var o = { args, result };
    calls.push(o);
    return result;
  }
  f.calls = calls;
  return f;
}


let sum = (a, b) => a + b;

let o = {
  name: 'tito',
  say: function(name) { return  `hello, ${name}, i' am ${this.name}` },
}

sum = spy(sum);
o.say = spy(o.say);

sum(1, 2);
sum(3, 4);
o.say('peanut');
console.log(sum.calls[0].args);
console.log(sum.calls[0].result);
console.log(sum.calls[1].args);
console.log(sum.calls[1].result);
console.log(o.say.calls[0].args);
console.log(o.say.calls[0].result);




