const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const navMobile = document.querySelector('.nav-mobile');

menu.addEventListener('click', () => {
  navMobile.classList.add('open');
});

close.addEventListener('click', () => {
  navMobile.classList.remove('open');
});
