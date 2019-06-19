const debounce = (fn, duration) => {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn();
    }, duration);
  }
}