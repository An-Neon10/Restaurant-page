import "./css/reset.css";
import "./css/style.css";
import "./css/content.css";

import imageChef from "./images/pexels-yente-van-eynde-2403391.jpg";
import maps from "./images/pexels-pixabay-38271.jpg";

(() => {
  const Display = (() => {
    const content = document.querySelector("#content");

    function cleanContent() {
      content.innerHTML = "";
    }

    function isContentActive(button) {
      return button && button.className.split(" ").includes("Button--active");
    }

    function createParagraph(paragraph) {
      const p = document.createElement("p");
      p.setAttribute("class", "Home-paragraph");
      p.textContent = paragraph;
      return p;
    }

    function createBlock() {
      const block = document.createElement("div");
      block.setAttribute("class", "Home-block");
      return block;
    }

    function createImage(srcImage, altImage) {
      const image = document.createElement("img");
      image.src = srcImage;
      image.alt = altImage;
      image.setAttribute("class", "Home-image");

      return image;
    }

    function removeActiveToAllButton() {
      [...document.querySelectorAll(".Button--link")].forEach((button) => {
        button.classList.remove("Button--active");
      });
    }

    function setContentActive(button) {
      if (!button) return;
      removeActiveToAllButton();
      button.classList.add("Button--active");
    }

    function appendToContent(element) {
      content.appendChild(element);
    }

    return {
      appendToContent,
      cleanContent,
      isContentActive,
      createParagraph,
      createBlock,
      setContentActive,
      createImage,
    };
  })();

  const HomeContent = (() => {
    const homeButton = document.querySelector("#homeBtn");

    const createHomeContent = () => {
      if (Display.isContentActive(homeButton)) return;
      Display.setContentActive(homeButton);
      Display.cleanContent();

      const block = Display.createBlock();
      const image = Display.createImage(imageChef, "Chef Image");
      const firstParagraph = Display.createParagraph(
        "Best Pizza in the country"
      );
      const secondParagraph = Display.createParagraph(
        "Made with passion since 2023"
      );
      const lastParagraph = Display.createParagraph(
        "Made with passion since 2023"
      );

      block.appendChild(firstParagraph);
      block.appendChild(secondParagraph);
      block.appendChild(image);
      block.appendChild(lastParagraph);

      Display.appendToContent(block);
    };

    createHomeContent();

    homeButton.addEventListener("click", createHomeContent);
  })();

  const AboutContent = (() => {
    const aboutBtn = document.querySelector("#aboutBtn");

    const createAboutContent = () => {
      if (Display.isContentActive(aboutBtn)) return;
      Display.setContentActive(aboutBtn);
      Display.cleanContent();

      const block = Display.createBlock();
      const image = Display.createImage(maps, "Map");
      const phoneNumber = Display.createParagraph("📱 123 456 789");
      const address = Display.createParagraph(
        "🏡 Hollywood Boulevard 42, Los Angeles, USA"
      );

      block.appendChild(phoneNumber);
      block.appendChild(address);
      block.appendChild(image);

      Display.appendToContent(block);
    };

    aboutBtn.addEventListener("click", createAboutContent);
  })();

  const MenuContent = (() => {
    const menuBtn = document.querySelector("#menuBtn");

    const createMenuContent = () => {
      if (Display.isContentActive(menuBtn)) return;
      Display.setContentActive(menuBtn);

      Display.cleanContent();
      const block = Display.createBlock();

      Display.appendToContent(block);
    };

    menuBtn.addEventListener("click", createMenuContent);
  })();
})();
