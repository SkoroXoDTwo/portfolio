const cards = document.querySelectorAll('.card');



function addEventListenerBurgerBtn () {
  const burgerBtn = document.querySelector('.header__burger');
  const popupMenu = document.querySelector('.popup-menu');
  const headerLogo = document.querySelector('.header__logo');

  burgerBtn.addEventListener('click', () => {
    popupMenu.classList.toggle('popup-menu_opened');
    burgerBtn.classList.toggle('header__burger_close');
    headerLogo.classList.toggle('header__logo_fixed');
  });
}

addEventListenerBurgerBtn();

function changedSpeedCardScroll (img, cardImg, speed) {
  img.src = cardImg.src;

  img.onload = function() {
    const hight = this.height;
    cardImg.style = `transition: object-position ${hight * speed}s,
     -o-object-position ${hight * speed}s`;
  }
}

cards.forEach((card) => {
  const img = new Image();

  const cardToggle = card.querySelector('.card__toggle');

  const cardGithubIcon = card.querySelector('.card__github-icon');
  const cardGithubText = card.querySelector('.card__github-text');
  const cardImg = card.querySelector('.card__img');
  const cardImgScrollBtn = card.querySelector('.card__img-scroll');

  console.log(cardImgScrollBtn);

  cardImgScrollBtn.addEventListener("click", () => {
    cardImg.classList.toggle('card__img_scroll');
  });

  changedSpeedCardScroll(img, cardImg, 0.0005);

  cardGithubIcon.addEventListener('mouseover', () => {
    cardGithubText.classList.add('card__github-text_hover');
  });

  cardGithubIcon.addEventListener('mouseout', () => {
    cardGithubText.classList.remove('card__github-text_hover');
  });

  if(cardToggle) {
    cardToggle.addEventListener('click', () => {

      if(cardToggle.classList.contains('card__toggle_active')) {
        const cardImgLink = cardImg.src.slice(0, cardImg.src.length - 11);
        cardImg.src = `${cardImgLink}.png`;
        changedSpeedCardScroll(img, cardImg, 0.0005);
        cardToggle.classList.remove('card__toggle_active');
      }
      else {
        const cardImgLink = cardImg.src.slice(0, cardImg.src.length - 4);
        cardImg.src = `${cardImgLink}-mobile.png`;
        changedSpeedCardScroll(img, cardImg, 0.001);
        cardToggle.classList.add('card__toggle_active');
      }

    });
  }
});
