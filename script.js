// Add subtle scroll animations
document.addEventListener("scroll", () => {
  document.querySelectorAll(".content").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Initialize hidden state
document.querySelectorAll(".content").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 1s ease";
});
