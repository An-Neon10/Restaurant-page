import maps from "../images/maps.webp";
import {
  isContentActive,
  setContentActive,
  cleanContent,
  createBlock,
  createImage,
  createParagraph,
  appendToContent,
} from "../utils/Display.js";

export const AboutContent = (() => {
  const aboutBtn = document.querySelector("#aboutBtn");

  const createAboutContent = () => {
    if (isContentActive(aboutBtn)) return;
    setContentActive(aboutBtn);
    cleanContent();

    const block = createBlock("About-block");
    const image = createImage(maps, "Map");
    const phoneNumber = createParagraph("📱 123 456 789");
    const address = createParagraph(
      "🏡 Hollywood Boulevard 42, Los Angeles, USA"
    );

    block.appendChild(phoneNumber);
    block.appendChild(address);
    block.appendChild(image);

    appendToContent(block);
  };

  aboutBtn.addEventListener("click", createAboutContent);
})();
