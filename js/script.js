// Toggler Navbar Responsive
let btnBurger = document.querySelector(".burger-button"),
  modal = document.querySelector(".modal-container"),
  navMenu = document.querySelector(".nav-menu");

btnBurger.addEventListener("click", () => {
  modal.classList.toggle("active");
  navMenu.classList.toggle("active");
});
modal.addEventListener("click", () => {
  modal.classList.toggle("active");
  navMenu.classList.toggle("active");
});
navMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

$(".main-slider-content").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  center: true,
  rtl: true,
  navText: [
    "<i class='fas fa-arrow-right'></i>",
    "<i class='fas fa-arrow-left'></i>",
  ],
  responsive: {
    0: {
      margin: 10,
      center: true,
      items: 1.1,
    },
    575: {
      margin: 15,
      center: true,
      items: 1.2,
    },
    991: {
      items: 1.4,
    },
  },
});
$(".groups-body ").owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  rtl: true,
  dots: false,
  navText: [
    "<i class='fas fa-arrow-right'></i>",
    "<i class='fas fa-arrow-left'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    479: {
      items: 3,
    },
    767: {
      margin: 10,
      items: 5,
    },
    1200: {
      items: 5,
    },
  },
});
