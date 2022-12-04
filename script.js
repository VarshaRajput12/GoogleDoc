const hover = document.querySelectorAll(".hover");
const star = document.querySelector("#star");
const request = document.querySelectorAll(".request");
const meet = document.querySelector("#meet");
const arrow = document.querySelector("#arrow");
const details = document.querySelector("#details");
const cloud = document.querySelector(".cloud");
const cloudClick = document.querySelector("#cloud");
const bars = document.querySelector("#bars");
const buttons = document.querySelectorAll(".buttons");


hover.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "lightgray";
  });
});

hover.forEach((element) => {
  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "transparent";
  });
});

star.addEventListener("click", (e) => {
  if (e.target.style.color == "yellow") {
    e.target.style.color = "rgb(102, 96, 96)";
  } else {
    e.target.style.color = "yellow";
  }
});

request.forEach((ele) => {
  ele.addEventListener("mouseover", () => {
    ele.style.backgroundColor = "#e0e5eb";
  });
});

request.forEach((ele) => {
  ele.addEventListener("mouseout", () => {
    ele.style.backgroundColor = "transparent";
  });
});

arrow.addEventListener("click", (e) => {
  if (details.style.display == "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
});

cloudClick.addEventListener("click", (e) => {
  if (cloud.style.display == "block") {
    details.style.display = "none";
  } else {
    cloud.style.display = "block";
  }
});

bars.addEventListener("click", (e) => {
  displaya.style.display = "block";
});
