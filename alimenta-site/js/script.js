const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", nav.classList.contains("open"));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const links = [...document.querySelectorAll(".main-nav a")];
const sections = [...document.querySelectorAll("main [id]")];

const updateActive = () => {
  const y = window.scrollY + 120;
  let current = "inicio";
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top + window.scrollY;
    if (y >= top) current = section.id;
  });
  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};
window.addEventListener("scroll", updateActive, {passive:true});
updateActive();

document.querySelectorAll(".campaign-body button").forEach(button => {
  button.addEventListener("click", () => {
    const old = button.textContent;
    button.textContent = "Participando ✓";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = old;
      button.disabled = false;
    }, 1800);
  });
});
