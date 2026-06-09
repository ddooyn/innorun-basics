const printStars = (maxLine) => {
  let stars = "";

  for (i = 0; i < maxLine; i++) {
    stars += "*";
    console.log(stars);
  }
};

printStars(4);
