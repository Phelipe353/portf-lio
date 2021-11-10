export default function detalheInicial() {
  function detalhesInicial() {
    const title = document.querySelector('.titulo a');
    setTimeout(() => {
      title.classList.add('ativo');
    }, 500);

    const piscada = setInterval(() => {
      title.classList.toggle('ativo');
    }, 500);

    setTimeout(() => {
      clearInterval(piscada);
      title.classList.remove('ativo');
    }, 2500);
  }

  detalhesInicial();

  function typeWrite(elemento) {
    elemento.classList.add('activo');
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        setTimeout(() => {
          elemento.innerHTML += letra;
        }, 75 * i);
      }, 1000);
    });
  }
  typeWrite(document.querySelector(''));
}
