export class Card {
  constructor(data, template) {
    this._title = data.title,
    this._summary = data.summary,
    this._description = data.description,
    this._linkPage = data.linkPage,
    this._linkGithub = data.linkGithub,
    this._templateCard = template.card,
    this._linkImgDesktop = data.linkImgDesktop,
    this._imgClass = new Image();
  }

   _changeScrollSpeed(speed) {
    this._imgClass.src = this._imgElement.src;

    this._imgClass.onload = ()  => {
      const height = this._imgClass.height;

      this._imgElement.style = `transition: object-position ${height * speed}s`;
    }
  }

  _addToggleInCard(template) {
    const cardElement = this._generateCard();

    this._toggleElement = document
      .querySelector(template)
      .content
      .querySelector('.card__selector-container')
      .cloneNode(true);

    cardElement.querySelector('.card__footer').append(this._toggleElement);

    return cardElement;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateCard)
      .content
      .querySelector('.card__list-element')
      .cloneNode(true);

    return cardElement;
  }

  _addEventListener() {
    this._btnScrollImgElement.addEventListener("click", () => {
      this._imgElement.classList.toggle('card__img_scroll');
    });

    this._iconGithubElement.addEventListener('mouseover', () => {
      this._textGithubElement.classList.add('card__github-text_hover');
    });

    this._iconGithubElement.addEventListener('mouseout', () => {
      this._textGithubElement.classList.remove('card__github-text_hover');
    });
  }

  _generateCard() {

    this._element = this._getTemplate();

    this._imgElement = this._element.querySelector('.card__img');
    this._nameElement = this._element.querySelector('.card__title');
    this._textElement  = this._element.querySelector('.card__text');
    this._linkPageElement = this._element.querySelector('.card__img-link');
    this._btnScrollImgElement = this._element.querySelector('.card__img-scroll');
    this._linkGithubElement = this._element.querySelector('.card__github');
    this._iconGithubElement = this._linkGithubElement.querySelector('.card__github-icon');
    this._textGithubElement = this._linkGithubElement.querySelector('.card__github-text');

    this._imgElement.src = this._linkImgDesktop;
    this._nameElement.textContent = this._title;
    this._textElement.textContent = this._summary;
    this._linkPageElement.href = this._linkPage;
    this._linkGithubElement.href = this._linkGithub;

    return this._element;
  }
}
