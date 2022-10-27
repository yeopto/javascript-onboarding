function problem6(forms) {
  const result = [];
  const checkOverlapObj = {};

  forms.map((form) => {
    const [_, crewName] = form;
    for (let i = 0; i < crewName.length - 1; i++) {
      const tempWord = crewName.substring(i, i + 2);
      if (tempWord in checkOverlapObj) checkOverlapObj[tempWord]++;
      else checkOverlapObj[tempWord] = 1;
    }
  });

  forms.map((form) => {
    const [email, crewName] = form;
    for (let i = 0; i < crewName.length - 1; i++) {
      const tempWord = crewName.substring(i, i + 2);
      if (checkOverlapObj[tempWord] > 1) result.push(email);
    }
  });
  
  return result.sort();
}

module.exports = problem6;
