const container7 = document.querySelector("#slides-container7");
const container8 = document.querySelector("#slides-container8");

const slide7 = document.querySelector(".slides7");
const slide8 = document.querySelector(".slides8");

const prev7 = document.querySelector("#prev7");
const prev8 = document.querySelector("#prev8");

const next7 = document.querySelector("#next7");
const next8 = document.querySelector("#next8");

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
