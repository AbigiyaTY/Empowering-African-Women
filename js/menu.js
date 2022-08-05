const mainMenu = document.querySelector('.header2 .mainMenu');
const openMenu = document.querySelector('.header2 .openMenu');
const closeMenu = document.querySelector('.header2List .closeMenu');
const navitem = document.querySelectorAll('.mainMenu .nav-item .nav-link');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
openMenu.addEventListener('click', show);

function close() {
  mainMenu.style.top = '-100%';
}
closeMenu.addEventListener('click', close);

navitem.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});