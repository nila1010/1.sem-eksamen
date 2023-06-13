const container7 = document.querySelector("#slides-container7");
const container8 = document.querySelector("#slides-container8");
const container9 = document.querySelector("#slides-container9");

const slide7 = document.querySelector(".slides7");
const slide8 = document.querySelector(".slides8");
const slide9 = document.querySelector(".slides9");

const prev7 = document.querySelector("#prev7");
const prev8 = document.querySelector("#prev8");
const prev9 = document.querySelector("#prev9");

const next7 = document.querySelector("#next7");
const next8 = document.querySelector("#next8");
const next9 = document.querySelector("#next9");

next7.addEventListener("click", () => {
  const slideWidth = slide7.clientWidth;
  container7.scrollLeft += slideWidth;
});

prev7.addEventListener("click", () => {
  const slideWidth = slide7.clientWidth;
  container7.scrollLeft -= slideWidth;
});

next8.addEventListener("click", () => {
  const slideWidth = slide8.clientWidth;
  container8.scrollLeft += slideWidth;
});

prev8.addEventListener("click", () => {
  const slideWidth = slide8.clientWidth;
  container8.scrollLeft -= slideWidth;
});

next9.addEventListener("click", () => {
  const slideWidth = slide9.clientWidth;
  container9.scrollLeft += slideWidth;
});

prev9.addEventListener("click", () => {
  const slideWidth = slide9.clientWidth;
  container9.scrollLeft -= slideWidth;
});
