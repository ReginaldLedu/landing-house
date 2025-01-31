const animatedText = Array.from(
  document.querySelectorAll('[data-observed="text"]')
);
const animatedImg = Array.from(
  document.querySelectorAll('[data-observed="img"]')
);
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const menuIcon = document.querySelector('.menu-icon');
const params = {
  root: document.body,
  rootMargin: '0px',
  threshold: 0.5,
};
function showMenu() {
  nav.style.display = 'flex';
  header.style['min-height'] = '100%';
  header.style.height = '100%';
}
function hideMenu() {
  nav.style.display = 'none';
  header.style['min-height'] = '60px';
  header.style.height = '60px';
}
function toggleMenu() {
  menuIcon.classList.toggle('menu-icon-active');
  if (menuIcon.classList.contains('menu-icon-active')) {
    showMenu();
  } else {
    hideMenu();
  }
}
const textScrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0px)';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(-15px)';
    }
  });
}, params);
animatedText.forEach(item =>
  textScrollObserver.observe(item, textScrollObserver)
);

const imgScrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'inset 4s ease-in-out';
      entry.target.style.opacity = '1';
      // entry.target.style.transition = 'animation 2s ease';
    } else {
    }
  });
}, params);
animatedImg.forEach(item => imgScrollObserver.observe(item, imgScrollObserver));

document
  .querySelector('.menu-icon-wrapper')
  .addEventListener('click', toggleMenu);
nav.addEventListener('click', () => {
  if (document.body.offsetWidth < 565) {
    menuIcon.classList.toggle('menu-icon-active');
    hideMenu();
  }
});
