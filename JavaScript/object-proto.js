var cat = {
  say() {
    console.log('meow~');
  },
  jump() {
    console.log(jump);
  }
}

var tiger = Object.create(cat, {
  say: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: function() {
      console.log('roar!');
    },
  }
});


var anotherCat = Object.create(cat);
var anotherTiger = Object.create(tiger);

anotherCat.say();

anotherTiger.say();