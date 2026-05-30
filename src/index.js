import "./styles.css";
import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

function loadPage(pageElement) {
  content.textContent = "";
  content.appendChild(pageElement);
}

homeBtn.addEventListener("click", () => {
  loadPage(createHomePage());
});

menuBtn.addEventListener("click", () => {
  loadPage(createMenuPage());
});

contactBtn.addEventListener("click", () => {
  loadPage(createContactPage());
});

loadPage(createHomePage());