Function.prototype.MyCall = function(ctx, ...arguments) {
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

const a = {
  num: 10,
  say() {
    console.log(this.num);
  },
};

const b = {
  num: 20,
};

a.say.MyCall(b);