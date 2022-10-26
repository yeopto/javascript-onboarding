function threeSixNineCount(num) {
  let count = 0;
  for (let i = 0; i < String(num).length; i++) {
    if (
      String(num)[i] === '3' ||
      String(num)[i] === '6' ||
      String(num)[i] === '9'
    ) count++;  
  }
  return count;
}

function problem3(number) {
  const numberArr = Array.from(new Array(number), (_, k) => k + 1);
  const clapCountArr = numberArr.map((num) => threeSixNineCount(num));

  return clapCountArr.reduce((acc, cur) => acc + cur, 0);
}

module.exports = problem3;
