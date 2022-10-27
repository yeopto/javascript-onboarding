function problem6(forms) {
  const result = new Set();
  const checkOverlapObj = {};

  forms.map((form) => {
    const [_, crewName] = form;
    for (let i = 0; i < crewName.length - 1; i++) {
      const tempWord = crewName.substring(i, i + 2);
      if (tempWord in checkOverlapObj) checkOverlapObj[tempWord]++;
      else checkOverlapObj[tempWord] = 1;
    }
  });
  
  return result;
}

module.exports = problem6;
