function problem2(cryptogram) {
  const cryptogramArr = [...cryptogram];
  const stack = [];
  let checkOverword = "";

  for (let i = 0; i < cryptogramArr.length; i++) {
    if (checkOverword === cryptogramArr[i]) continue;

    if (cryptogramArr[i] === cryptogramArr[i + 1])
      checkOverword = cryptogramArr[i];
    else {
      stack.push(cryptogramArr[i]);
      checkOverword = "";
    }
  }
  const decoding = stack.join("");

  return decoding === cryptogram ? decoding : problem2(decoding);
}

module.exports = problem2;
