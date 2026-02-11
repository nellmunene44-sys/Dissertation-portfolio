const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    formStatus.textContent = "Sending your message...";
    formStatus.className = "form-status is-pending";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      contactForm.reset();
      formStatus.textContent = "Message sent successfully. I will get back to you shortly.";
      formStatus.className = "form-status is-success";
    } catch (error) {
      formStatus.textContent = "Message could not be sent. Please try again or contact me via email/WhatsApp.";
      formStatus.className = "form-status is-error";
    }
  });
}
