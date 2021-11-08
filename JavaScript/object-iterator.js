const someObj = {
  name: 'peanutYu',
  age: 25,
  tel: 18770918920,
  [Symbol.iterator]() {
    let index = 0;
    const keys = Object.keys(this);
    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index++];
          return {
            value: {
              [key]: this[key],
            },
            done: false,
          }
        }
        return { done: true }
      },
    };
  },
};

for (item of someObj) {
  console.log(item);
}