document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  document.querySelectorAll('.nav-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const li = btn.closest('li');
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        li.classList.toggle('open');
      }
    });
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (window.innerWidth > 1024) return;
    if (!e.target.closest('.site-nav')) {
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('active');
    }
  });
});
