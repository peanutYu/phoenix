const fibonacci = (n) => {
  if (!fibonacci.cache) {
    fibonacci.cache = [];
    for (let i = 1; i <= 1000000; i++) {
      if (i === 1 || i === 2) {
        fibonacci.cache[i] = 1;
      }
      else if (i > 2) {
        fibonacci.cache[i] = fibonacci.cache[i - 1] + fibonacci.cache[i - 2];
      }
    }
  }

  return fibonacci.cache[n];
}