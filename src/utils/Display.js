const content = document.querySelector("#content");

export function cleanContent() {
  content.innerHTML = "";
}

export function isContentActive(button) {
  return button && button.className.split(" ").includes("Button--active");
}

export function createParagraph(paragraph) {
  const p = document.createElement("p");
  p.setAttribute("class", "Home-paragraph");
  p.textContent = paragraph;
  return p;
}

export function createBlock(className) {
  const block = document.createElement("div");
  block.setAttribute("class", className);
  return block;
}

export function createImage(srcImage, altImage) {
  const image = document.createElement("img");
  image.src = srcImage;
  image.alt = altImage;
  image.setAttribute("class", "Home-image");

  return image;
}

export function removeActiveToAllButton() {
  [...document.querySelectorAll(".Button--link")].forEach((button) => {
    button.classList.remove("Button--active");
  });
}

export function setContentActive(button) {
  if (!button) return;
  removeActiveToAllButton();
  button.classList.add("Button--active");
}

export function appendToContent(element) {
  content.appendChild(element);
}
