// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

const arr1 = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];


const flatArray = arr => {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      newArr = newArr.concat(flatArray(item));
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(Array.from(new Set(flatArray(arr1))).sort((a, b) => a - b));