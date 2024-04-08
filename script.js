"use strict";
// document.querySelector(".nav").addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.closest("li")?.classList.contains("link")) {
//     const id = event.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });
const allSection = document.querySelectorAll(".section");
const sectionAbout = document.querySelector(".section-about");
const allLinks = document.querySelectorAll(".link");
const activateTab = function (id) {
  allLinks.forEach(function (link) {
    if (link.querySelector("a").getAttribute("href") !== `#${id}`) {
      link.classList.remove("active");
    } else link.classList.add("active");
  });
};
const sectionReveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  activateTab(entry.target.getAttribute("id"));
  // observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.1,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  if (window.innerHeight >= 544 && section != sectionAbout)
    section.classList.add("section-hidden");
});

const btnProjects = document.querySelector(".btn-project");
const sectionProject = document.querySelector(".section-projects");
btnProjects.addEventListener("click", function (event) {
  event.preventDefault();
  sectionProject.scrollIntoView({ behavior: "smooth" });
});

const btnHirme = document.querySelector(".btn-hire");
const btnSubmit = document.querySelector(".btn-submit");
const overLay = document.querySelector(".over-lay");
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const allInput = document.querySelectorAll(".input");
btnHirme.addEventListener("click", function (event) {
  event.preventDefault();
  overLay.classList.add("overlay");
  modal.classList.remove("modal-hidden");
});
const closeModal = function () {
  overLay.classList.remove("overlay");
  modal.classList.add("modal-hidden");
  allInput.forEach((input) => (input.value = ""));
};
document.addEventListener("click", function (event) {
  if (event.target == btnHirme) return;
  const container = event.target.closest(".modal-container");
  if (!container) {
    closeModal();
  }
});
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  closeModal();
});
