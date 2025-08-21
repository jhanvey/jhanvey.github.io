// Main JS for interactions

// Bounce Welcome 1s after clicking the hero arrow
const arrow = document.querySelector('.scroll-down');
const welcomeText = document.getElementById('welcomeText');

arrow?.addEventListener('click', () => {
  if (!welcomeText) return;

  // allow re-trigger: remove class, force reflow, then add after 1s
  welcomeText.classList.remove('welcome-bounce-once');
  void welcomeText.offsetWidth; // reflow
  setTimeout(() => {
    welcomeText.classList.add('welcome-bounce-once');
  }, 1000);
});

// Clean up the class after the animation ends (optional)
welcomeText?.addEventListener('animationend', (e) => {
  if (e.animationName === 'welcomePulse') {
    welcomeText.classList.remove('welcome-bounce-once');
  }
});

// Back to top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600){
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});
toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
