document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });
  });
});
