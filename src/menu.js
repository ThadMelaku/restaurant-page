export function createMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("page", "menu-page");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const list = document.createElement("ul");

  const items = [
    "Classic Burger - $16",
    "BBQ Chicken Sandwich - $15",
    "Loaded Fries - $10",
    "Post-Run Pancakes - $14",
  ];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  menu.append(heading, list);

  return menu;
}