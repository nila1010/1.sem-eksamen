const ikon = document.querySelector("#burger");
const disp = document.querySelector("nav ul");

ikon.addEventListener("click", openClose);

function openClose() {
  ikon.classList.toggle("open");
  const ikonShown = ikon.classList.contains("open");
  if (ikonShown) {
    ikon.classList.add("open");
    disp.classList.remove("navuldispno");
  } else {
    ikon.classList.remove("open");
    disp.classList.add("navuldispno");
  }
}
