const container = document.querySelector("#slides-container");
const container2 = document.querySelector("#slides-container2");
const container3 = document.querySelector("#slides-container3");

const slide1 = document.querySelector(".slides1");
const slide2 = document.querySelector(".slides2");
const slide3 = document.querySelector(".slides3");

const prev = document.querySelector("#prev");
const prev2 = document.querySelector("#prev2");
const prev3 = document.querySelector("#prev3");

const next = document.querySelector("#next");
const next2 = document.querySelector("#next2");
const next3 = document.querySelector("#next3");

next.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  container.scrollLeft += slideWidth;
});

prev.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  container.scrollLeft -= slideWidth;
});

next2.addEventListener("click", () => {
  const slideWidth = slide1.clientWidth;
  container2.scrollLeft += slideWidth;
});

prev2.addEventListener("click", () => {
  const slideWidth = slide1.clientWidth;
  container2.scrollLeft -= slideWidth;
});

next3.addEventListener("click", () => {
  const slideWidth = slide3.clientWidth;
  container3.scrollLeft += slideWidth;
});

prev3.addEventListener("click", () => {
  const slideWidth = slide3.clientWidth;
  container3.scrollLeft -= slideWidth;
});
