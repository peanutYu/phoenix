// pause 函数可以让一个函数暂停运行一段时间（ms）以后继续运行。 例如

async function run() {
  console.log('Hello')
  const start = new Date();
  await pause(1000) // 续一秒
  console.log(new Date() - start);
  console.log('World') // 一秒以后继续运行
}

const pause = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

run();