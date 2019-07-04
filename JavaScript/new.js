function _new () {
  const [constructor, ...args] = [...arguments];
  if (constructor.constructor !== Function) {
    throw new Error('the first argument must be a function');
  }
  const o = Object.create(null);
  o.__proto__ = constructor.prototype;
  constructor.apply(o, args);
  return o;
};


function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(`name: ${this.name}`);
  }
}

const dog = _new(Dog, '小黄', 18);
console.log(dog);
dog.say();