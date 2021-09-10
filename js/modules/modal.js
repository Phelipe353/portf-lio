export default function initModal() {
  const botaoAbrir = document.querySelectorAll('[data-modal="abrir"]');
  const botaoFechar = document.querySelectorAll('[data-modal="fechar"]');
  const projeto = document.querySelectorAll('[data-modal="projeto"]');
  const containerModal = document.querySelector('[data-modal="container"]');

   if(botaoAbrir && botaoFechar && containerModal) {
    
    function toggleModal(i) {
      console.log(projeto[i]);
      projeto[i].classList.add('ativo');
      containerModal.classList.add('ativo');
    }
    function previne (event){
      event.preventDefault();
    }
    function cliqueForaModal(event) {
      console.log(event);
      console.log(this);
      if(event.target === this) {
        projeto.forEach((item)=>{
          item.classList.remove('ativo');
        })
        containerModal.classList.remove('ativo');
      }
    }
  
    botaoAbrir.forEach((item, i)=>{
      item.addEventListener('click', ()=>{
        toggleModal(i), previne
      });
    })
    
    botaoFechar.forEach((item, i)=>{
      item.addEventListener('click', cliqueForaModal);
    })
  
    containerModal.addEventListener('click', cliqueForaModal);
  }
}