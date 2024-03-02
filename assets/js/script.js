document.addEventListener("DOMContentLoaded", () => {
  Modernizr.on("webp", function (supported) {
    if (supported) {
      document.querySelector("html").classList.add("webp");
    }
  });

  AOS.init({
    duration: 1000,
  });
});
