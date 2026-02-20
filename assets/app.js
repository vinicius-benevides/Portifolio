// Navegação responsiva e microinterações modernas

const body = document.body;
const nav = document.getElementById("navbar");
const btnNav = document.getElementById("btnNav");
const themeToggle = document.getElementById("themeToggle");
const scrollButton = document.getElementById("scrollTopButton");
const yearSpan = document.getElementById("year");

// Atualiza ano do rodapé
yearSpan.textContent = new Date().getFullYear();

// Alterna tema claro/escuro
themeToggle?.addEventListener("click", () => {
  const current = body.getAttribute("data-theme") === "light" ? "dark" : "light";
  body.setAttribute("data-theme", current);
});

// Fecha navbar ao clicar em um link (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (btnNav && !btnNav.classList.contains("collapsed")) {
      btnNav.click();
    }
  });
});

// Botão voltar ao topo + sombra no nav
window.addEventListener("scroll", () => {
  const threshold = window.innerHeight * 0.2;
  if (window.scrollY > threshold) {
    scrollButton?.classList.add("show");
    nav?.classList.add("scrolled");
  } else {
    scrollButton?.classList.remove("show");
    nav?.classList.remove("scrolled");
  }
});

// Reveal animado ao entrar na viewport
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Ajuste inicial para navegadores com posição restaurada
window.dispatchEvent(new Event("scroll"));
