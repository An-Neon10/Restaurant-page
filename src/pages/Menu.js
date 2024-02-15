import p1 from "../images/pizza1.webp";
import p2 from "../images/pizza2.webp";
import p3 from "../images/pizza3.webp";

import {
  isContentActive,
  setContentActive,
  cleanContent,
  createBlock,
  createImage,
  createParagraph,
  appendToContent,
} from "../utils/Display.js";

const MenuContent = (() => {
  const menuBtn = document.querySelector("#menuBtn");

  const createMenuContent = () => {
    if (isContentActive(menuBtn)) return;
    setContentActive(menuBtn);
    cleanContent();

    const block = createBlock("Menu-block");

    [
      createImage(p1, "pizza1"),
      createImage(p2, "pizza2"),
      createImage(p3, "pizza3"),
    ].forEach((image, index) => {
      const blockItem = createBlock("Menu-item");
      const p = createParagraph(`Pizza ${index + 1}`);
      blockItem.appendChild(image);
      blockItem.appendChild(p);
      block.appendChild(blockItem);
    });

    appendToContent(block);
  };

  menuBtn.addEventListener("click", createMenuContent);
})();
