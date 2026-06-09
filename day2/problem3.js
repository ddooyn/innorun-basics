const normalizeName = (value) => {
  if (value === null || value === undefined) return "이름없음";

  const name = value.trim();

  return !name ? "이름없음" : name;
};

console.log(normalizeName(" 김하나 "));
console.log(normalizeName(""));
console.log(normalizeName(null));
console.log(normalizeName(undefined));
