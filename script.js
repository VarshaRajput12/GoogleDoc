const hover = document.querySelectorAll(".hover");
const star = document.querySelector("#star");
const request = document.querySelectorAll(".request");
const meet = document.querySelector("#meet");
const arrow = document.querySelector("#arrow");
const details = document.querySelector("#details");
const cloud = document.querySelector(".cloud");
const cloudClick = document.querySelector("#cloud");

const buttons = document.querySelectorAll(".buttons");

const file = document.querySelector("#file");
const fileItems = document.querySelector(".fileItems");

const edit = document.querySelector("#edit");
const editBox = document.querySelector(".editItems");

const view = document.querySelector("#view");
const viewBox = document.querySelector(".viewItems");

const tools = document.querySelector("#tools");
const toolBox = document.querySelector(".toolItems");

const drive = document.querySelector("#drive");
const driveBox = document.querySelector(".driveItems");

const help = document.querySelector("#help");
const helpBox = document.querySelector(".helpItems");

const pTags = document.querySelectorAll("p");

const requestclick = document.querySelector("#request");
const requestBox = document.querySelector(".request_edit_access");

const body = document.querySelector("body");

const meetLogo = document.querySelector(".meetLogo");
const meetBox = document.querySelector(".meet_dialogue2");

const profile = document.querySelector("#profile");
const profileBox = document.querySelector(".profile");


// hover effect on icons and buttons

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
    cloud.style.display = "none";
  } else {
    cloud.style.display = "block";
  }
});

// file dialogue box

file.addEventListener("click", (e) => {
  if (fileItems.style.display == "block") {
    fileItems.style.display = "none";
  } else {
    fileItems.style.display = "block";
  }
});

// edit dialogue box

edit.addEventListener("click", (e) => {
  if (editBox.style.display == "block") {
    editBox.style.display = "none";
  } else {
    editBox.style.display = "block";
  }
});

// view dialogue box

view.addEventListener("click", (e) => {
  if (viewBox.style.display == "block") {
    viewBox.style.display = "none";
  } else {
    viewBox.style.display = "block";
  }
});

// tools dialogue box

tools.addEventListener("click", (e) => {
  if (toolBox.style.display == "block") {
    toolBox.style.display = "none";
  } else {
    toolBox.style.display = "block";
  }
});

// drive dialogue box

drive.addEventListener("click", (e) => {
  if (driveBox.style.display == "block") {
    driveBox.style.display = "none";
  } else {
    driveBox.style.display = "block";
  }
});

// help dialogue box

help.addEventListener("click", (e) => {
  if (helpBox.style.display == "block") {
    helpBox.style.display = "none";
  } else {
    helpBox.style.display = "block";
  }
});

// all the p tags of fileItems

pTags.forEach((ele) => {
  ele.addEventListener("mouseover", () => {
    ele.style.backgroundColor = "#e0e5eb";
  });
});

pTags.forEach((ele) => {
  ele.addEventListener("mouseout", () => {
    ele.style.backgroundColor = "transparent";
  });
});

//right side request dialogue box

requestclick.addEventListener("click", (e) => {
  if (requestBox.style.display == "block") {
    requestBox.style.display = "none";
  } else {
    requestBox.style.display = "block";
  }
});

// meet_dialogue2 dialogue box

meetLogo.addEventListener("click", (e) => {
  if (meetBox.style.display == "block") {
    meetBox.style.display = "none";
  } else {
    meetBox.style.display = "block";
  }
});

// profile dialogue box

profile.addEventListener("click", (e) => {
  if (profileBox.style.display == "block") {
    profileBox.style.display = "none";
  } else {
    profileBox.style.display = "block";
  }
});

