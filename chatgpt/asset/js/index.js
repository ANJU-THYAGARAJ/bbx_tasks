// Render Lucide icons automatically
lucide.createIcons();

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("prompt-input");
  const suggestionCards = document.querySelectorAll(".card");

  // Transfer suggestion text into search bar when clicked
  suggestionCards.forEach((card) => {
    card.addEventListener("click", () => {
      input.value = card.textContent.trim();
      input.focus();
    });
  });

  // Action when user presses Enter
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      alert(`Sent: ${input.value}`);
      input.value = "";
    }
  });
});