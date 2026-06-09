const sumBetween = (startValue, endValue) => {
  const toNumber = (v) => Number(v.trim());
  const startValueNum = toNumber(startValue);
  const endValueNum = toNumber(endValue);

  const isInvalid = (v) => !Number.isFinite(v) || !Number.isInteger(v);
  if (isInvalid(startValueNum) || isInvalid(endValueNum)) {
    return 0;
  }

  if (startValueNum > endValueNum) {
    return 0;
  }

  let sum = 0;
  for (i = startValueNum; i <= endValueNum; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumBetween("1", "5"));
console.log(sumBetween("3", "3"));
console.log(sumBetween("5", "1"));
console.log(sumBetween("1.5", "3"));
