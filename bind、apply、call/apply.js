Function.prototype.MyApply = function(ctx, arguments) {
  if (typeof ctx === 'undefined' || ctx === null || ctx.constructor !== Object) {
    ctx = {};
  }
  let result;
  ctx.fn = this;
  if (arguments) {
    result = ctx.fn(...arguments);
  } else {
    result = ctx.fn();
  }
  delete ctx.fn;
  return result;
}


console.log(Math.max.MyApply(null, [20, 32, 10, 29, 100]));

const a = {
  num: 10,
  say() {
    console.log(this.num);
  },
};

const b = {
  num: 20,
};

a.say.MyApply(b);