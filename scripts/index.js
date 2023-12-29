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

   const container = document.querySelector('#rests-container');
   const restArray = [
      {
         id: 0,
         title: "Пицца плюс",
         time: 60, 
         rating: 4.5,
         price: 900,
         type: 'Пицца',
         image: 'card1.jpg'
      }, 
      {
         id: 1,
         title: "Тануки ",
         time: 40, 
         rating: 3.5,
         price: 400,
         type: 'Пицца',
         image: 'card2.jpg'
      },
      {
         id: 2,
         title: "FoodBand",
         time: 50, 
         rating: 2.0,
         price: 700,
         type: 'Пицца',
         image: 'card3.jpg'
      },
      {
         id: 2,
         title: "Жадина-пицца",
         time: 50, 
         rating: 2.0,
         price: 700,
         type: 'Пицца',
         image: 'card4.jpg'
      },
      {
         id: 2,
         title: "Точка еды",
         time: 30, 
         rating: 1.0,
         price: 1000,
         type: 'Пицца',
         image: 'card5.jpg'
      },
      {
         id: 2,
         title: "PizzaBurger",
         time: 50, 
         rating: 6.0,
         price: 800,
         type: 'Пицца',
         image: 'card6.jpg'
      }

   ];


   const loading = () => {
      container.innerHTML = '';
   }


   const rendersRestaraunts = (array)=>{
      container.innerHTML = '';

      array.forEach((card) => {
         container.insertAdjacentHTML('beforeend', `
               <a class="products-card" href="./goods.html?id=${card.id}">
                  <div class="products-card__image">
                     <img src="./img/cards/${card.image}" alt="${card.image}">
                  </div>

                  <div class="products-card__description">
                     <div class="products-card__description-row">
                        <h4 class="products-card__description--title"> ${card.title} </h4>
                        <div class="products-card__description--beidge"> ${card.time} мин </div>
                     </div>
                     
                     <div class="products-card__description-row">
                        <div class="products-card__description-info">
                           <div class="products-card__description-info--rating">
                              <img src="./img/star.svg" alt="Рейтинг заведения"> ${card.rating}
                           </div>
                           <div class="products-card__description-info--price"> От ${card.price} ₽ </div>
                           <div class="products-card__description-info--group"> ${card.type} </div>
                        </div>
                     </div>
                  </div>
               </a>
         `);
      });
   }


   if(container){
      loading();

      setTimeout(() => {
         rendersRestaraunts(restArray);
      }, 1000);
   }

  

   
   
   

};


modalFunc();
restsFunc();