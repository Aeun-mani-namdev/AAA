
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Mobile navigation
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Select business interest automatically
document.querySelectorAll("[data-interest]").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("interest").value =
      link.dataset.interest;
  });
});

// Contact form demo
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const interest = document.getElementById("interest").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Website Enquiry - " + interest);
  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\nInterest: " + interest +
    "\nMessage: " + message
  );

  document.getElementById("formMessage").textContent =
    "Opening your email app to prepare the enquiry...";

  window.location.href =
    "mailto:hello@triplealegacy.com?subject=" +
    subject + "&body=" + body;
});

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();
