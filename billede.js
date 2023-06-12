document.querySelector("#nicolai").addEventListener("mouseover", hover);

function hover() {
  console.log("hover");
  document.querySelector("#nicolai").src = "imgs/index/baggrundcss2.webp";
}

document.querySelector("#nicolai").addEventListener("mouseout", out);

function out() {
  console.log("hover");
  document.querySelector("#nicolai").src = "imgs/index/baggrundhtml.webp";
}
