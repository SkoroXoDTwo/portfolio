import { CardAdptive } from './CardAdaptive.js';
import { CardDesctop } from './CardDesctop.js';
import { initialCardItems } from './cardItems.js';

const cardList = document.querySelector('.project__list');

const template = {
  card: '#card-item-template',
  toggleAdaptive: '#card-toggle-adaptive-template',
  toggleDesctop: '#card-toggle-desctop-template'
};

if(cardList) {
  initialCardItems.forEach((item) => {
    if(item.linkImgMobile) {
      const cardAdptive = new CardAdptive(item, template);
      cardList.append(cardAdptive.generateCard());
    }
    else {
      const cardDesctop = new CardDesctop(item, template);
      cardList.append(cardDesctop.generateCard());
    }
  });
}

function addEventListenerBurgerBtn () {
  const bodyBlock = document.querySelector('.body');
  const burgerBtn = bodyBlock.querySelector('.header__burger');
  const popupMenu = bodyBlock.querySelector('.popup-menu');

  burgerBtn.addEventListener('click', () => {
    bodyBlock.classList.toggle('body_popup-menu');
    popupMenu.classList.toggle('popup-menu_opened');
    burgerBtn.classList.toggle('header__burger_close');
  });
}

addEventListenerBurgerBtn();
