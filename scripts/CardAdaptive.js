import { Card } from './Card.js';

export class CardAdptive extends Card {
  constructor(data, template) {
    super(data, template);
    this._linkImgMobile = data.linkImgMobile;
    this._toggleAdaptiveTemplate = template.toggleAdaptive;
  }

  _addEventListener() {
    super._addEventListener();

    let toggleIsActive = false;

    this._toggleElement.addEventListener('click', () => {
      toggleIsActive = !toggleIsActive;

      this._toggleBtnElement.classList.toggle('card__toggle_active');

      if(toggleIsActive) {
        this._imgElement.src = this._linkImgMobile;
        super._changeCardScrollSpeed(0.001);
      }
      else {
        this._imgElement.src = this._linkImgDesctop;
        super._changeCardScrollSpeed(0.0005);
      }
    });
  }

  generateCard() {
    this._element = super._addToggleInCard(this._toggleAdaptiveTemplate);

    this._toggleBtnElement = this._toggleElement.querySelector('.card__toggle');

    super._changeCardScrollSpeed(0.0005);
    this._addEventListener();

    return this._element;
  };
}
