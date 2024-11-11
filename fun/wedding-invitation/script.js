document.addEventListener("DOMContentLoaded", function () {
  const rsvpButton = document.getElementById("rsvpButton");
  const rsvpForm = document.getElementById("rsvpForm");
  const weddingDateElement = document.getElementById("weddingDate");

  // Toggle RSVP form
  rsvpButton.addEventListener("click", function () {
    rsvpForm.classList.toggle("hidden");
    rsvpButton.textContent = rsvpForm.classList.contains("hidden")
      ? "RSVP"
      : "Close RSVP";
  });

  // Set wedding date (e.g., 3 months from now)
  const weddingDate = new Date();
  weddingDate.setMonth(weddingDate.getMonth() + 3);
  weddingDateElement.textContent = weddingDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Handle form submission (you can customize this part)
  const form = rsvpForm.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your RSVP!");
    rsvpForm.classList.add("hidden");
    rsvpButton.textContent = "RSVP";
  });
});
