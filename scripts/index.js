const modalFunc = () => {

   const modal = document.querySelector('.cart-modal__overlay');
   const cartBtn = document.querySelector('#cart-button');



   const openModal = () => {
      modal.classList.add('open');
   }


   const closeModal = () => {
      modal.classList.remove('open');
   }


   cartBtn.addEventListener('click', () => {
      openModal();
   });




   modal.addEventListener('click', (evt) => {  // при нажати на оверлей, окно закроектяс
      // если у нажатого элемента есть класс cart-modal__overlay:
      if(evt.target.classList.contains('cart-modal__overlay') || evt.target.closest('.cart-modal__header-close')){ // closest() проверяет есть ли у элемента/его родителя указанный класс 
         closeModal();
      }
      
   });

};



const restsFunc = ()=> {


};


modalFunc();
restsFunc();