function isInPage(pobiPages, crongPages) {
  if (
    pobiPages.every((page) => page >= 1 && page <= 400) && 
    crongPages.every((page) => page >= 1 && page <= 400)
  ) {
    return true;
  }
  return false;
}

function isLengthTwo(pobiPages, crongPages) {
  if (
    pobiPages.length === 2 && 
    crongPages.length === 2
  ) {
    return true;
  }
  return false;
}

function checkNextPage(pobiPages, crongPages) {
  if (
    pobiPages[1] - pobiPages[0] === 1 &&
    crongPages[1] - crongPages[0] === 1
  ) {
    return true;
  }
  return false;
}

function getBiggerNum(page) {
  const add = String(page).split('').reduce((acc, cur) => +acc + +cur, 0);
  const multiply = String(page).split('').reduce((acc, cur) => +acc * +cur, 1);
  const biggerNum = Math.max(add, multiply);

  return biggerNum;
}

function problem1(pobi, crong) {
  if (
    !isInPage(pobi, crong) ||
    !isLengthTwo(pobi, crong) ||
    !checkNextPage(pobi, crong)
  ) return -1;

  const pobiScore = Math.max(...pobi.map((pobiPage) => getBiggerNum(pobiPage)))
  const crongScore = Math.max(...crong.map((crongPage) => getBiggerNum(crongPage)));

  if (pobiScore === crongScore) return 0;
  else if (pobiScore > crongScore) return 1;
  else return 2;
}

module.exports = problem1;