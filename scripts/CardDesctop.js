import { Card } from './Card.js';

export class CardDesctop extends Card {
  constructor(data, template) {
    super(data, template);

    this._toggleDesctopTemplate = template.toggleDesctop;
  }

  generateCard() {
    this._element = super._addToggleInCard(this._toggleDesctopTemplate);

    super._changeCardScrollSpeed(0.0005);
    super._addEventListener();

    return this._element;
  };
}
