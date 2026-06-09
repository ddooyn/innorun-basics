const countOddNumbers = (limitValue) => {
  const limitValueNum = Number(limitValue.trim());

  if (!Number.isFinite(limitValueNum) || !Number.isInteger(limitValueNum) || limitValueNum < 1) {
    return 0;
  }

  let oddCounts = 0;
  for (i = 1; i <= limitValueNum; i++) {
    if (i % 2) oddCounts++;
  }

  return oddCounts;
};

console.log(countOddNumbers("7"));
console.log(countOddNumbers("10"));
console.log(countOddNumbers("abc"));
console.log(countOddNumbers("2.5"));
