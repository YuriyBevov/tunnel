document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".overlay").classList.add("hidden");

    AOS.init({
      duration: 1000,
    });
  }, 300);
});
