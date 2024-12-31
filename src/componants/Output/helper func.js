export function showLabel(e) {
  const lab = Array.from(document.querySelectorAll(`label`));
  for (const element of lab) {
    if (element.htmlFor == e.target.id) {
      if (e.target.value != "") {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
}

export function activeNav(e) {
  const tabs = Array.from(document.querySelectorAll("nav ul li a"));
  for (const element of tabs) {
    element.classList.remove("activeTab");
  }
  e.target.classList.add("activeTab");
  console.log(e.target);
}

export function showImg(e) {
  const shower = document.getElementById("showImg");
  const bigImg = document.getElementById("bigImg");
  shower.classList.remove("d-none");
  const sorc = e.target.id;
  bigImg.setAttribute("src", `http://localhost:5173/src/assets/${sorc}.png`);
  console.log(bigImg.attrib);
}

export function removeShow(e) {
  if (e.target.id == "bigImg") {
    return;
  }
  const shower = document.getElementById("showImg");
  shower.classList.add("d-none");
}
