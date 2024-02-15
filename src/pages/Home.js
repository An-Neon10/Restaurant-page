import imageChef from "../images/chef.webp";
import {
  isContentActive,
  setContentActive,
  cleanContent,
  createBlock,
  createImage,
  createParagraph,
  appendToContent,
} from "../utils/Display.js";

const HomeContent = (() => {
  const homeButton = document.querySelector("#homeBtn");

  const createHomeContent = () => {
    if (isContentActive(homeButton)) return;
    setContentActive(homeButton);
    cleanContent();

    const block = createBlock("Home-block");
    const image = createImage(imageChef, "Chef Image");
    const firstParagraph = createParagraph("Best Pizza in the country");
    const secondParagraph = createParagraph("Made with passion since 2023");
    const lastParagraph = createParagraph("Made with passion since 2023");

    block.appendChild(firstParagraph);
    block.appendChild(secondParagraph);
    block.appendChild(image);
    block.appendChild(lastParagraph);

    appendToContent(block);
  };

  createHomeContent();

  homeButton.addEventListener("click", createHomeContent);
})();
