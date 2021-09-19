export default function initBackground() {
  const conteudo = document.querySelector('header');
  const bgApresenta = document.querySelector('.bg-apresentacao');
  console.log(conteudo.innerHTML);
  bgApresenta.style.background = conteudo.innerHTML
};

