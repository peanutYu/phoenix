class MyEventEmitter {
  constructor() {
    this.listeners = [];
  }
  addListener(name, func) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(func);
  }
  emit(name, ...args) {
    const listeners = this.listeners[name] || [];
    const length = listeners.length;
    if (listeners && length >= 0) {
      listeners.forEach(listener => listener(...args));
    }
  }
  removeListener(name, func) {
    const listeners = this.listeners[name] || [];
    const length = listeners.length;
    if (listeners && length >= 0) {
      const index = listeners.indexOf(func);
      if (index > -1) {
        if (length === 1) {
          delete this.listeners[name];
        } else {
          listeners.splice(index, 1);
        }
      }
    }
  }
}

const ab = name => console.log(`ab, ${name}`);
const abc = name => console.log(`abc, ${name}`);
const hello = name => console.log(`hello, ${name}`);


const myEventEmitter = new MyEventEmitter();

myEventEmitter.addListener('a', ab);
myEventEmitter.addListener('a', abc);
myEventEmitter.addListener('hello', hello);

myEventEmitter.emit('a', 'peanut');
myEventEmitter.emit('hello', 'peanut');

console.log(myEventEmitter);

myEventEmitter.removeListener('hello', hello);
myEventEmitter.removeListener('a', ab);

console.log('--------------分割线--------------');

myEventEmitter.emit('a', 'peanut');
myEventEmitter.emit('hello', 'peanut');

console.log(myEventEmitter);

