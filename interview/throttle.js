const myThrottle = (fn, wait) => {
  let timer = null;
  return function() {
    const now = Date().now();
    if (!timer) {
      timer = now;
      fn.apply(this, arguments);
      return;
    }
    if (now - timer > wait) {
      timer = now;
      fn.apply(this, arguments);
    }
  }
}