function currying(fn, length) {
  length = length || fn.length;
  return function(...arguments) {
    return arguments.length >= length ? fn.apply(this, arguments) : currying(fn.bind(this, ...arguments), length - arguments.length);
  }
}

const fn = currying(function(a, b, c) {
  console.log([a, b, c]);
})

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]


function add (...args) {
  function fn(...arguments) {
    return add.apply(null, [...args, ...arguments]);
  }
  fn.toString = function () {
    console.log([...args].reduce((a, b) => a + b));
    return [...args].reduce((a, b) => a + b);
  }
  return fn;
}

console.log(add(1, 2, 3));