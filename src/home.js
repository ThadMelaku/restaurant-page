import grillImage from "./images/grill.jpg";

export function loadHome() {
  const content = document.querySelector("#content");

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

  content.append(
    heading,
    image,
    description,
    hoursHeading,
    hours
  );
}