function _new () {
  const [constructor, ...args] = [...arguments];
  if (constructor.constructor !== Function) {
    throw new Error('the first argument must be a function');
  }
  const o = {};
  o.__proto__ = constructor.prototype;
  const result = constructor.apply(o, args);
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result;
  }
  return o;
};


function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.say = function() {
  console.log(`name: ${this.name}`);
}

const dog = _new(Dog, '小黄', 18);
console.log(dog);
dog.say();

const dog2 = new Dog('小红', 16);
console.log(dog2);
dog2.say();