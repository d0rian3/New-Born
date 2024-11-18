import { languages } from "./languages.js";

if (!languages) {
  console.error("Languages object is not loaded.");
} else {
  console.log("Languages object loaded:", languages);
}

const switchLanguage = (language) => {
  try {
    if (!languages[language]) {
      console.error(`Language "${language}" not found in languages object.`);
      return;
    }
    console.log(`Switching to language: ${language}`);

    const elements = document.querySelectorAll("[id]");
    if (elements.length === 0) {
      console.warn("No elements with IDs found in the DOM.");
    } else {
      console.log(`Found ${elements.length} elements with IDs.`);
    }

    elements.forEach((element) => {
      const key = element.id;
      const translation = languages[language][key];
      if (!translation) {
        console.warn(`No translation found for key: ${key}`);
      } else {
        console.log(`Updating element with id="${key}" to:`, translation);
        if (
          element.tagName === "LABEL" ||
          element.tagName === "P" ||
          element.tagName === "H2" ||
          element.tagName === "SPAN" ||
          element.tagName === "BUTTON"
        ) {
          element.innerText = translation;
        }
      }
    });
  } catch (error) {
    console.error("An error occurred in switchLanguage:", error);
  }
};

document.querySelectorAll(".submenu-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    try {
      event.preventDefault();
      const selectedLanguage = event.target.getAttribute("data-lang");
      if (!selectedLanguage) {
        console.error("No data-lang attribute found on the clicked element.");
        return;
      }
      console.log("Selected language:", selectedLanguage);
      switchLanguage(selectedLanguage);
    } catch (error) {
      console.error("An error occurred in the language switch handler:", error);
    }
  });
});
