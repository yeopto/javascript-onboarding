function problem2(cryptogram) {
  const cryptogramArr = [...cryptogram];
  const stack = [];

  for (let i = 0; i < cryptogramArr.length; i++) {
    if (cryptogramArr[i] !== cryptogramArr[i + 1]) {
      stack.push(cryptogramArr[i]);
    } else {
      i++;
    }
  }
  const decoding = stack.join('');

  return decoding === cryptogram ? decoding : problem2(decoding);
}

module.exports = problem2;