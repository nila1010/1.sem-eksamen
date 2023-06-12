const container6 = document.querySelector("#slides-container6");

const slide6 = document.querySelector(".slides6");

const next6 = document.querySelector("#next6");

const prev6 = document.querySelector("#prev6");

next6.addEventListener("click", () => {
  const slideWidth = slide6.clientWidth;
  container6.scrollLeft += slideWidth;
});

prev6.addEventListener("click", () => {
  const slideWidth = slide6.clientWidth;
  container6.scrollLeft -= slideWidth;
});
