import outsideClick from './outsideClick.js';

export default function initeMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const listOptions = document.querySelector('[data-menu="list"]');
  const menuList = document.querySelector('[data-menu="suave"]');
  const header = document.querySelector('header');
  const eventos = ['click'];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.toggle('active');
      menuButton.classList.toggle('active');
      header.classList.toggle('active');
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
        header.classList.remove('active');
      });
    }

    function closeMenu() {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
      header.classList.remove('active');
    }

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });

    eventos.forEach((evento) => {
      listOptions.addEventListener(evento, closeMenu);
    });
  }
}
