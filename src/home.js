import grillImage from "./images/grill.png";

export function createHomePage() {
  const home = document.createElement("div");
  home.classList.add("page", "home-page");

  const heading = document.createElement("h1");
  heading.textContent = "Thad's Grill";

  const image = document.createElement("img");
  image.src = grillImage;
  image.alt = "Grill";

  const description = document.createElement("p");
  description.textContent =
    "The perfect place to refuel after a long run. Fresh burgers, BBQ, and local craft beverages served daily.";

  const hoursHeading = document.createElement("h2");
  hoursHeading.textContent = "Hours";

  const hours = document.createElement("ul");

  const weekday = document.createElement("li");
  weekday.textContent = "Mon-Fri: 11am - 9pm";

  const weekend = document.createElement("li");
  weekend.textContent = "Sat-Sun: 9am - 11pm";

  hours.append(weekday, weekend);
  home.append(
    heading,
    image,
    description,
    hoursHeading,
    hours
  );

  return home
}