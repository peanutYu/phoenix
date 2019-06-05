Function.prototype.MyBind = function(ctx, ...args) {
  const self = this;
  return function(...aruguments) {
    return self.apply(ctx, [...args, ...aruguments]);
  }  
}

var a = {
  num: 10,
  say(name, date) {
    console.log(`${name}在${date}时候有${this.num}元`);
  },
}

var b = {
  num: 20,
}

a.say.bind(b, '小花', new Date())();

const toStr = Function.prototype.call.MyBind(Object.prototype.toString);

console.log(toStr([1, 2, 3])); 	// "[object Array]"
console.log(toStr('123')); 		// "[object String]"
console.log(toStr(123)); 		// "[object Number]"
console.log(toStr(Object(123))); // "[object Number]"