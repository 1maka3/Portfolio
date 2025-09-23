// Atualiza automaticamente o ano no footer
document.getElementById("year").textContent = new Date().getFullYear();

// Tema Dark/Light
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Verifica se já existe tema salvo no localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeToggle.textContent = "🌞";
}

// Alterna o tema ao clicar
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  
  if (body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌞";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

// Animação quando as seções entram na tela
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});
