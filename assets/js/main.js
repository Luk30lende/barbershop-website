/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//Show Menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide Menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER WORKS ===============*/
const swiperWork = new Swiper(".work__swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 24,
  grabCursor: true,

  pagination: {
    el: ".work__data .swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".work__data .swiper-button-next",
    prevEl: ".work__data .swiper-button-prev",
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper(".service__swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 56,
  grabCursor: true,

  pagination: {
    el: ".service__swiper .swiper-pagination",
  },

  navigation: {
    nextEl: ".service__swiper .swiper-button-next",
    prevEl: ".service__swiper .swiper-button-prev",
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id,
      top = section.offsetTop - 50,
      height = section.offsetHeight,
      link = document.querySelector(".nav__menu a[href*=" + id + "]");

    if (!link) return;

    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height,
    );
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== GSAP ANIMATION ===============*/

/* Home animation */

/* Home background animation */

/* The nav animation only works in the home section */

/* About animation */

/* Work animation */

/* Service animation */

/* Expert animation */

/* Contact animation */

/* Footer animation */
