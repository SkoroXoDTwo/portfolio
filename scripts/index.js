const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const cardToggle = card.querySelector('.card__toggle');
  let cardGithubBlock = card.querySelector('.card__github');
  const cardGithubIcon = card.querySelector('.card__github-icon');
  const cardGithubText = card.querySelector('.card__github-text');

  cardGithubIcon.addEventListener('mouseover', () => {
    cardGithubText.classList.add('card__github-text_hover');
  });

  cardGithubIcon.addEventListener('mouseout', () => {
    cardGithubText.classList.remove('card__github-text_hover');
  });

  if(cardToggle) {
    cardToggle.addEventListener('click', () => {
      const cardImg = card.querySelector('.card__img');

      if(card.querySelector('.card__toggle_active')) {
        cardImg.classList.remove('card__img_mobile');
        const cardImgLink = cardImg.src.slice(0, cardImg.src.length - 11);
        cardImg.src = `${cardImgLink}.png`;
        cardToggle.classList.remove('card__toggle_active');
      }
      else {
        cardImg.classList.add('card__img_mobile');
        const cardImgLink = cardImg.src.slice(0, cardImg.src.length - 4);
        cardImg.src = `${cardImgLink}-mobile.png`;
        cardToggle.classList.add('card__toggle_active');
      }

    });
  }
});
