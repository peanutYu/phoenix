// 完成将 toChineseNum， 可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五。

const toChineseNum = num => {
  const units = ['', '十', '百', '千', '万'];
  const counts = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const nums = num.toString().split('').reverse();
  return nums.map((num, o) => {
    return `${counts[num]}${+num === 0 ? '' : units[o]}`;
  }).reverse().join('');
}

console.log(toChineseNum(13451));