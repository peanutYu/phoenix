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