const myDebounce = (fn, delay) => {
  let timer = null;
  return function() {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      fn.apply(context, arguments);
    }, delay);
  }
}