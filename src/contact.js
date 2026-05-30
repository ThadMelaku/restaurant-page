export function createContactPage() {
  const contact = document.createElement("div");
  contact.classList.add("page", "contact-page");

  const heading = document.createElement("h1");
  heading.textContent = "Contact";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 604-555-1234";

  const address = document.createElement("p");
  address.textContent = "Address: 123 Run Club Lane, Richmond, BC";

  const email = document.createElement("p");
  email.textContent = "Email: hello@thadsgrill.ca";

  contact.append(heading, phone, address, email);

  return contact;
}