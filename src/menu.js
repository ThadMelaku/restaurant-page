import pancakesImage from "./images/pancakes.png";

export function createMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("page", "menu-page");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

   const image = document.createElement("img");
    image.src = pancakesImage;
    image.alt = "pancakes";

  const list = document.createElement("ul");

  const items = [
    "Post-Run Pancakes - $14",
    "Classic Burger - $16",
    "BBQ Chicken Sandwich - $15",
    "Loaded Fries - $10",

  ];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  menu.append(heading, image, list);

  return menu;
}