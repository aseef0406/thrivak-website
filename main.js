const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('revealed'));
}, { threshold: 0.12 });

document.querySelectorAll('.intro, .steps article, .challenge-grid article, .join').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('thrivak-theme');

if (savedTheme === 'dark') document.body.classList.add('dark-mode');

function updateThemeToggle() {
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('thrivak-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  updateThemeToggle();
});

updateThemeToggle();
