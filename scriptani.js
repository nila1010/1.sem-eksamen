const container4 = document.querySelector("#slides-container4");
const container5 = document.querySelector("#slides-container5");

const slide4 = document.querySelector(".slides4");
const slide5 = document.querySelector(".slides5");

const next4 = document.querySelector("#next4");
const next5 = document.querySelector("#next5");

const prev4 = document.querySelector("#prev4");
const prev5 = document.querySelector("#prev5");

next4.addEventListener("click", () => {
  const slideWidth = slide4.clientWidth;
  container4.scrollLeft += slideWidth;
});

prev4.addEventListener("click", () => {
  const slideWidth = slide4.clientWidth;
  container4.scrollLeft -= slideWidth;
});

next5.addEventListener("click", () => {
  const slideWidth = slide5.clientWidth;
  container5.scrollLeft += slideWidth;
});

prev5.addEventListener("click", () => {
  const slideWidth = slide5.clientWidth;
  container5.scrollLeft -= slideWidth;
});
