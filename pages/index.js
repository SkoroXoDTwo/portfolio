import { CardAdptive } from '../components/CardAdaptive.js';
import { CardDesktop } from '../components/CardDesktop.js';
import {
  template,
  cardList,
  initialCardItems
} from '../utils/constants.js';

if(cardList) {
  initialCardItems.forEach((item) => {
    if(item.linkImgMobile) {
      const cardAdaptive = new CardAdptive(item, template);
      cardList.append(cardAdaptive.generateCard());
    }
    else {
      const cardDesktop = new CardDesktop(item, template);
      cardList.append(cardDesktop.generateCard());
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
