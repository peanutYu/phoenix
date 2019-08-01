const myThrottle = (fn, wait) => {
  let last = 0;
  return function() {
    const now = Date().now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, arguments);
    }
  }
}