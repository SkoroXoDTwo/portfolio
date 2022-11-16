import { Card } from './Card.js';

export class CardDesktop extends Card {
  constructor(data, template) {
    super(data, template);

    this._toggleDesktopTemplate = template.toggleDesktop;
  }

  generateCard() {
    this._element = super._addToggleInCard(this._toggleDesktopTemplate);

    super._changeScrollSpeed(0.0005);
    super._addEventListener();

    return this._element;
  };
}
